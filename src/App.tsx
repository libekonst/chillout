import React, { Component, MouseEvent } from 'react';
import data, { IRadio } from './data';
import { theme } from './styles';
import { ThemeProvider } from 'styled-components';
import { GridBodyRow, GridHeader } from './components/grid';
import { isLarge } from './styles';
import { debounce } from './utils/debounce';
import './App.css';
import './normalize.css';
import { Favorites } from './Favorites';
import { madeWithLove } from './made-with-love';
import { LoadingBar, Tuner } from './components/loaders';

interface IState {
  favoritesOpened: boolean;
  contentReady: boolean;
  isPlaying: boolean;
  isScreenLarge: boolean;
  selectedRadioId?: number;
  favorites: IRadio[];
  isLoading: boolean;
  src?: string;
}
class App extends Component<{}, IState> {
  readonly state: IState = {
    favoritesOpened: isLarge(), // If large screen, favorites should be open. Else closed.
    favorites: [],
    isScreenLarge: isLarge(),
    contentReady: false,
    selectedRadioId: undefined,
    isPlaying: false,
    isLoading: false,
    src: undefined,
  };
  audioRef: any = React.createRef<HTMLAudioElement>();
  src: string | undefined;
  audio = new Audio(this.state.src);

  // TODO: Use togglePlayRadio(this.state.selectedRadioId) on audio player.
  togglePlayRadio = (id: number) => async (): Promise<void> => {
    const { selectedRadioId, isPlaying } = this.state;
    if (selectedRadioId !== undefined && selectedRadioId === id && isPlaying) {
      await this.audioRef.pause();
      document.title = 'The Chillout App';
      return this.setState({ isPlaying: false, src: undefined });
    }

    const radio = data.find(radio => radio.id === id)!; // Non null assertion. If undefined, the promise will be rejected and handle by trycatch.

    //  Slow but safe. Causes 2 renders.
    return this.setState(
      { src: radio.source, isPlaying: false, isLoading: true },
      async () => {
        try {
          await this.audioRef.play();
          this.setState({ selectedRadioId: id, isPlaying: true, isLoading: false });
          document.title = `${radio.name} - The Chillout App`;
        } catch (e) {
          this.setState({ isLoading: false });
          // TODO: Show failed notification.
        }
      },
    );
  };

  addFavorite = (radio: IRadio) => (): void => {
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
    /** The load event is fired when everything has been loaded, including images and external resources. */
    window.addEventListener('load', this.renderComponentTree);
    window.addEventListener('resize', this.toggleFavoritesComponent);
    document.title = 'The Chillout App';
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
                  opacity: this.state.isLoading ? 1 : 0,
                }}
              >
                <LoadingBar animate={this.state.isLoading} />
              </aside>
              <main>
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
                            this.state.selectedRadioId === item.id &&
                            this.state.isPlaying
                          }
                          isSelected={this.state.selectedRadioId === item.id}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </main>
            </>
          </ThemeProvider>
          <audio ref={input => (this.audioRef = input)} src={this.state.src} />
        </div>
        {/* )} */}
      </>
    );
  }
}

export default App;
