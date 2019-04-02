import React, { Component, MouseEvent } from 'react';
import data, { IRadio } from './data';
import { theme } from './styles';
import { ThemeProvider } from 'styled-components';
import { GridBodyRow, GridHeader } from './components/grid';
import { Loader } from './loader';
import { isLarge } from './styles';
import { debounce } from './utils/debounce';

import './App.css';
import './normalize.css';
import { Favorites } from './Favorites';
import { madeWithLove } from './made-with-love';

interface IState {
  favoritesOpened: boolean;
  contentReady: boolean;
  isPlaying: boolean;
  isScreenLarge: boolean;
  selectedRadioId?: number;
  favorites: IRadio[];
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
    src: undefined,
  };
  audioRef: any = React.createRef();
  src: string | undefined;
  audio = new Audio(this.state.src);

  togglePlayRadio = (id: number) => async (): Promise<void> => {
   
    const { selectedRadioId, isPlaying } = this.state;
    if (selectedRadioId !== undefined && selectedRadioId === id && isPlaying) {
      await this.audioRef.pause();
      return this.setState({ isPlaying: false, src: undefined }, () => {
        document.title = 'The Chillout App';
      });
    }

    const radio = data.find(radio => radio.id === id)!; // Non null assertion. If undefined, the promise will be rejected and the audio won't play.

    //  Slow but safe. Causes 2 renders.
    return this.setState({ src: radio.source }, async () => {
      await this.audioRef.play();
      this.setState({ selectedRadioId: id, isPlaying: true });
      document.title = `${radio.name} - The Chillout App`;
    });

    // Fast but unsafe if the audio fails to load.
    // TODO: Handle rejected promise.
    // return this.setState(
    //   { src: radio.source, selectedRadioId: id, isPlaying: true },
    //   async () => {
    //     await this.audioRef.play();
    //     document.title = `${radio.name} - The Chillout App`;
    //   },
    // );
    
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
        {!this.state.contentReady && <Loader />}
        {this.state.contentReady && (
          <>
            <ThemeProvider theme={theme}>
              <>
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
          </>
        )}
      </>
    );
  }
}

export default App;
