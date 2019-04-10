import React, { Component, SyntheticEvent } from 'react';
import data, { IRadio } from './data';
import { theme } from './styles';
import { ThemeProvider } from 'styled-components';
import { GridBodyRow, GridHeader } from './components/grid';
import { isLarge } from './styles';
import { debounce, setDocTitle } from './utils';
import './App.css';
import './normalize.css';
import { Player } from './components/audio-player';
import { Favorites } from './Favorites';
import { madeWithLove } from './made-with-love';
import { LoadingBar, Tuner } from './components/loaders';

interface IState {
  // App state
  contentReady: boolean;
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
class App extends Component<{}, IState> {
  readonly state: IState = {
    // App state
    isScreenLarge: isLarge(),
    contentReady: false,

    // Radio State
    favoritesOpened: isLarge(), // If large screen, favorites should be open. Else closed.
    activeRadioId: undefined,
    pendingRadioId: undefined,
    favorites: [],

    // Playback/Radio state
    isPlaying: false,
    isLoading: false,

    // Audio state
    audioMuted: false,
    volume: initialVolume,
  };

  // <- AUDIO ->
  audioRef = React.createRef<HTMLAudioElement>();
  resetAudioSrc = 'about:blank';

  changeAudioVolume = (e: any) => {
    const audio = this.audioRef.current;
    if (!audio) return;

    audio.volume = e.target.value;
    if (audio.muted) audio.muted = false;
    this.setVolumeState();
  };

  muteAudio = () => {
    const audio = this.audioRef.current;
    if (!audio) return;

    this.setState(prev => {
      audio.muted = !prev.audioMuted;
      return { audioMuted: !prev.audioMuted };
    });
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

  handleAudioStopped = (e: any): void =>
    this.setState({ isPlaying: false }, setDocTitle);
  handleAudioError = (e: any): void =>
    this.setState({ isLoading: false, isPlaying: false }, setDocTitle);
  handleAudioStarted = (e: any): void => {
    const radio = data.find(r => r.source === e.target.src);
    if (radio) {
      this.setState({ isPlaying: true, isLoading: false, activeRadioId: radio.id }, () =>
        setDocTitle(radio.name),
      );
    }
  };
  handleLoadStarted = (e: any): void => {
    const audio = this.audioRef.current;
    const radio = data.find(r => r.source === e.target.src);

    console.log(audio!.src);

    if (audio && audio.src !== this.resetAudioSrc)
      this.setState({
        isPlaying: false,
        isLoading: true,
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
    if (this.state.activeRadioId === id && this.state.isPlaying) {
      audio.pause();
      audio.src = this.resetAudioSrc;
      return audio.load();
    }

    // Non null assertion on find().
    // If undefined, the promise will be rejected and handled by the onError handler.
    const radio = data.find(radio => radio.id === id)!;
    audio.src = radio.source;
    return await audio.play();
  };

  // <- FAVORITES ->
  addFavorite = (radio: IRadio) => (e: any): void => {
    e.stopPropagation(); // Parent's onClick event handler runs this.togglePlayRadio
    this.setState(prevState => {
      if (prevState.favorites.includes(radio))
        return { favorites: prevState.favorites.filter(item => item !== radio) };
      return { favorites: [radio, ...prevState.favorites] };
    });
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

  renderComponentTree = () => this.setState({ contentReady: true });

  componentDidMount() {
    const audio = this.audioRef.current!; //Non null assertion. The ref is available in componentDidMount.
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
        {/* Don't wait for everything to load. */}
        {!this.state.contentReady && <Tuner />}
        {/* {this.state.contentReady && ( */}
        <div
          style={{ opacity: this.state.contentReady ? 1 : 0, transition: 'opacity 1s' }}
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
                  opacity: this.state.isLoading ? 1 : 0,
                }}
              >
                <LoadingBar animate={this.state.isLoading} />
              </aside>
              <main style={{ paddingBottom: '2rem' }}>
                <Favorites
                  expandFavorites={this.expandFavorites}
                  openFavorites={this.openFavorites}
                  togglePlayRadio={this.togglePlayRadio}
                  {...this.state}
                />
                <div>
                  <GridHeader />
                  <ul>
                    {data.map(item => (
                      <li key={item.id}>
                        <GridBodyRow
                          name={item.name}
                          image={item.image}
                          label={item.label}
                          handleAddFavorite={this.addFavorite(item)}
                          handlePlay={this.togglePlayRadio(item.id)}
                          isFavorite={this.state.favorites.includes(item)}
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
                </div>
              </main>
              <Player
                // Play button
                isPlaying={this.state.isPlaying || this.state.isLoading}
                handlePlay={this.togglePlayRadio(this.state.activeRadioId)}
                // Audio
                onMuteAudio={this.muteAudio}
                muted={this.state.audioMuted}
                changeAudioVolume={this.changeAudioVolume}
                volume={this.state.volume}
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
        {/* )} */}
      </>
    );
  }
}

export default App;
