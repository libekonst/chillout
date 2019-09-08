import React, { Component, SyntheticEvent } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppReadyState } from './AppContext';
import { Player } from './components/audio-player';
import { GridBodyRow, GridHeader } from './components/grid';
import { IndeterminateLoadingBar } from './components/loaders';
import data, { IRadio } from './data';
import { Favorites } from './Favorites';
import { madeWithLove } from './made-with-love';
import { isLarge } from './styles';
import { theme } from './styles';
import { debounce, setDocTitle } from './utils';
import './App.css';
import './normalize.css';
import './reset.css';

import { HomeView } from './views/HomeView';

interface IState {
  // App state
  appReady: boolean;
  isScreenLarge: boolean;

  // Radio state
  favoritesOpened: boolean;
  activeRadioId?: number;
  pendingRadioId?: number;
  favorites: IRadio[];

  // Playback state
  isPlaying: boolean;
  isLoading: boolean;

  // Audio state
  volume: number;
  audioMuted: boolean;
}

const initialVolume = 0.6;
const collections = {
  favorites: 'favorites',
  active: 'active',
};
class App extends Component<{}, IState> {
  /**
   * Retrieves the favorites JSON from `window.localStorage.favorites` and converts it to a `IRadio[]`,
   * or returns undefined if the collection is empty.
   */
  getFavoritesFromLocalStorage = () => {
    const favorites = localStorage.getItem(collections.favorites);
    if (!favorites) return;

    return Object.values(JSON.parse(favorites)) as IRadio[];
  };

  getActiveRadioFromLocalStorage = () => {
    const active = localStorage.getItem(collections.active);
    if (!active) return;

    return JSON.parse(active).id;
  };

  readonly state: IState = {
    // App state
    isScreenLarge: isLarge(),
    appReady: false,

    // Radio State
    favoritesOpened: isLarge(), // If large screen, favorites should be open. Else closed.
    pendingRadioId: this.getActiveRadioFromLocalStorage(),
    activeRadioId: this.getActiveRadioFromLocalStorage(),
    favorites: this.getFavoritesFromLocalStorage() || [], // Initialize to an empty array if the collection is empty.

    // Playback/Radio state
    isPlaying: false,
    isLoading: false,

    // Audio state
    audioMuted: false,
    volume: initialVolume,
  };

  // <- AUDIO ->
  audioRef = React.createRef<HTMLAudioElement>();
  resetAudioSrc = 'javascript:void(0)';

  changeAudioVolume = (e: any) => {
    const audio = this.audioRef.current;
    if (!audio) return;

    // Update the audio
    const volume = e.target.value;
    audio.volume = volume;
    if (audio.muted) audio.muted = false;

    return this.setState({ volume, audioMuted: false });
  };

  /**
   * Sets `volume` and `audioMuted` states to update the controlled range input element.
   * This function is called only after the user stops moving the slider for 100ms.
   */
  setVolumeState = debounce(() => {
    const audio = this.audioRef.current;
    if (!audio) return;

    this.setState({ volume: audio.volume, audioMuted: false });
  }, 100);

  muteAudio = () => {
    const audio = this.audioRef.current;
    if (!audio) return;

    this.setState(prev => {
      audio.muted = !prev.audioMuted;
      return { audioMuted: !prev.audioMuted };
    });
  };

  handleAudioStopped = (e: any): void =>
    this.setState({ isPlaying: false }, setDocTitle);
  handleAudioError = (e: any): void => {
    const radio = data.find(r => r.source === e.target.src);

    if (radio)
      return this.setState(
        prev => ({
          isLoading: false,
          isPlaying: false,
          pendingRadioId: prev.activeRadioId,
        }),
        setDocTitle,
      );

    return this.setState({ isLoading: false, isPlaying: false }, setDocTitle);
  };
  handleAudioStarted = (e: any): void => {
    const radio = data.find(r => r.source === e.target.src);
    if (radio) {
      this.setState(
        { isPlaying: true, isLoading: false, activeRadioId: radio.id },
        () => {
          setDocTitle(radio.name);
          this.saveActiveRadioToLocalStorage(radio);
        },
      );
    }
  };

  saveActiveRadioToLocalStorage = (radio: IRadio) => {
    try {
      localStorage.setItem(collections.active, JSON.stringify(radio));
    } catch (e) {
      console.error(e);
    }
  };
  handleLoadStarted = (e: any): void => {
    const audio = this.audioRef.current;
    const radio = data.find(r => r.source === e.target.src);

    if (audio && audio.src !== this.resetAudioSrc)
      this.setState({
        isLoading: true,
        isPlaying: false,
        pendingRadioId: radio && radio.id,
      });
  };

  /**
   * Manipulates the audio element to play/stop the media.
   * Separate event handlers respond to the events raised by the audio element.
   */
  togglePlayRadio = (id?: number) => async (): Promise<void> => {
    // If the ref is not available, do nothing.
    const audio = this.audioRef.current;
    if (!audio) return;

    // If the provided ID is undefined, then no radio is selected.
    if (id === undefined) return alert('Select a radio first!');

    // Pause the audio and reset the source to force-stop buffering.
    // Restricts unnecessary data usage and prevents playing old content downloaded after pausing.
    if (
      (this.state.activeRadioId === id && this.state.isPlaying) ||
      (this.state.pendingRadioId === id && this.state.isLoading)
    ) {
      audio.pause();
      audio.src = this.resetAudioSrc;
      return audio.load();
    }

    // Non null assertion on find().
    // If undefined, the promise will be rejected and handled by the onError handler.
    const radio = data.find(r => r.id === id)!;
    audio.src = radio.source;
    return await audio.play();
  };

  // <- FAVORITES ->
  addFavorite = (radio: IRadio) => (e: any): void => {
    e.stopPropagation(); // Parent's onClick event handler runs this.togglePlayRadio
    this.setState(prevState => {
      if (!!prevState.favorites.find(f => f.id === radio.id))
        return { favorites: prevState.favorites.filter(f => f.id !== radio.id) };
      return { favorites: [radio, ...prevState.favorites] }; // Add from left.
    }, this.saveFavoritesToLocalStorage);
  };

  /**
   * Converts the `favorites: IRadio[]` into an object with each radio's id as a key
   * and the radio object as the value, then stringifies it and saves it to local storage
   * under the `window.localStorage.favorites` collection.
   */
  saveFavoritesToLocalStorage = () => {
    const favoritesObject = this.state.favorites.reduce(
      (acc, radio) => ({ ...acc, [radio.id]: radio }),
      {},
    );

    try {
      localStorage.setItem(collections.favorites, JSON.stringify(favoritesObject));
    } catch (e) {
      console.error(e);
    }
  };

  expandFavorites = (callback?: () => any): void => {
    this.setState(prev => ({ favoritesOpened: !prev.favoritesOpened }), callback);
  };
  openFavorites = (): void =>
    this.setState(prev => ({ favoritesOpened: !prev.favoritesOpened }));

  /**
   * Exclusive OR. Evaluates to true if one and only one input is true.
   * Only setState if `isLarge()` is not in agreement with `this.state.isScreenLarge`.
   * If so, toggle `this.state.isScreenLarge`.
   */
  toggleFavoritesComponent: () => void = debounce(() => {
    if (isLarge() !== this.state.isScreenLarge)
      this.setState(prev => ({
        isScreenLarge: !prev.isScreenLarge,
        favoritesOpened: !prev.isScreenLarge,
      }));
  });

  renderComponentTree = () => this.setState({ appReady: true });

  componentDidMount() {
    const audio = this.audioRef.current!; // Non null assertion. The ref is available in componentDidMount.
    audio.volume = initialVolume;

    /** The load event is fired when everything has been loaded, including images and external resources. */
    window.addEventListener('load', this.renderComponentTree);
    window.addEventListener('resize', this.toggleFavoritesComponent);
    madeWithLove();
  }
  componentWillUnmount() {
    window.removeEventListener('load', this.renderComponentTree);
    window.removeEventListener('resize', this.toggleFavoritesComponent);
  }

  render() {
    return (
      <>
        {/* {!this.state.appReady && <Tuner />} */}
        <AppReadyState.Provider value={this.state.appReady}>
          <div
            style={{
              opacity: this.state.appReady ? 1 : 0,
              transition: 'opacity 0.5s',
            }}
          >
            <ThemeProvider theme={theme}>
              <>
                <aside
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 10,
                  }}
                >
                  {this.state.isLoading && <IndeterminateLoadingBar />}
                </aside>
                <HomeView
                  sidebar={
                    <div
                      style={{
                        // minWidth: '300px',
                        // minHeight: '100%',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#fafafa',
                      }}
                    >
                      <p>Hello from the left side</p>
                      <p>Hey hey</p>
                    </div>
                  }
                  footer={
                    <Player
                      // Play button
                      isPlaying={this.state.isPlaying || this.state.isLoading}
                      handlePlay={this.togglePlayRadio(this.state.pendingRadioId)}
                      // Audio
                      onMuteAudio={this.muteAudio}
                      muted={this.state.audioMuted}
                      changeAudioVolume={this.changeAudioVolume}
                      volume={this.state.volume}
                      // Radio
                      radio={data.find(it => it.id === this.state.pendingRadioId)}
                      isRadioFavorite={
                        !!this.state.favorites.find(
                          f => f.id === this.state.pendingRadioId,
                        )
                      }
                      handleAddFavorite={this.addFavorite(
                        data.find(it => it.id === this.state.pendingRadioId)!,
                      )}
                    />
                  }
                  mainContent={
                    <div style={{ width: '100%', height: '100%', display: 'flex' }}>
                      <main
                        style={{ paddingBottom: '6rem', width: '100%', height: '100%' }}
                      >
                        <div
                          style={{ width: '100%', height: '10rem', overflow: 'hidden' }}
                        >
                          <img src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2704&q=80" />
                        </div>
                        <div
                          style={{
                            height: '1.5rem',
                            display: 'flex',
                            width: '100%',
                            backgroundColor: 'rgb(59, 140, 168)',
                            color: 'white',
                          }}
                        >
                          The Chillout App
                        </div>
                        <Favorites
                          expandFavorites={this.expandFavorites}
                          openFavorites={this.openFavorites}
                          togglePlayRadio={this.togglePlayRadio}
                          {...this.state}
                        />
                        <ul style={{padding: '0 2rem'}}>
                          {data.map(item => (
                            <li key={item.id}>
                              <GridBodyRow
                                name={item.name}
                                image={item.image}
                                label={item.label}
                                handleAddFavorite={this.addFavorite(item)}
                                handlePlay={this.togglePlayRadio(item.id)}
                                selected={item.id === this.state.pendingRadioId}
                                isFavorite={
                                  !!this.state.favorites.find(f => f.id === item.id)
                                }
                                isPlaying={
                                  (this.state.isLoading &&
                                    this.state.pendingRadioId === item.id) ||
                                  (this.state.isPlaying &&
                                    this.state.activeRadioId === item.id)
                                }
                              />
                            </li>
                          ))}
                        </ul>
                      </main>
                    </div>
                  }
                />
              </>
            </ThemeProvider>
            <audio
              ref={this.audioRef}
              onLoadStart={this.handleLoadStarted}
              onPlaying={this.handleAudioStarted}
              onError={this.handleAudioError}
              onEnded={this.handleAudioStopped}
              onSuspend={this.handleAudioStopped}
            >
              {" Your browser doesn't support the audio element. :( "}
            </audio>
          </div>
        </AppReadyState.Provider>
      </>
    );
  }
}

export default App;
