import React, { Component, MouseEvent } from 'react';
import data, { IRadio } from './data';
import { theme } from './styles';
import { ThemeProvider } from 'styled-components';
import { Carousel } from './components/carousel';
import { GridBodyRow, GridHeader } from './components/grid';
import { Loader } from './loader';
import { FAB } from './components/icon-buttons/FAB';
import { isLarge } from './styles';
import { Backdrop } from './components/Backdrop';
import { debounce } from './utils/debounce';
import { MdFavorite } from 'react-icons/md';

import './App.css';
import './normalize.css';

interface IState {
  favoritesOpened: boolean;
  contentReady: boolean;
  isPlaying: boolean;
  isScreenLarge: boolean;
  selectedRadioId?: number;
  favorites: IRadio[];
}
class App extends Component<{}, IState> {
  readonly state: IState = {
    favoritesOpened: isLarge(), // If large screen, favorites should be open. Else closed.
    favorites: [],
    isScreenLarge: isLarge(),
    contentReady: false,
    selectedRadioId: undefined,
    isPlaying: false,
  };

  playRadio = (id: number) => () => {
    this.setState(prevState => {
      if (prevState.selectedRadioId === id && prevState.isPlaying)
        return { isPlaying: false };
      return { selectedRadioId: id, isPlaying: true };
    });
  };
  expandFavorites = (callback?: () => any): void => {
    this.setState(prev => ({ favoritesOpened: !prev.favoritesOpened }), callback);
  };
  openFavorites = (): void =>
    this.setState(prev => ({ favoritesOpened: !prev.favoritesOpened }));

  addFavorite = (radio: IRadio) => (e: MouseEvent) => {
    this.setState(prevState => {
      if (prevState.favorites.includes(radio))
        return { favorites: prevState.favorites.filter(item => item !== radio) };
      return { favorites: [radio, ...prevState.favorites] };
    });
  };
  renderFavorites = () => {
    if (isLarge())
      return (
        <Carousel
          data={this.state.favorites}
          handleExpand={this.expandFavorites}
          expanded={this.state.favoritesOpened}
        />
      );

    return (
      !!this.state.favorites.length && (
        <>
          <FAB isOpen={this.state.favoritesOpened} onClick={this.openFavorites}>
            <MdFavorite />
          </FAB>
          <Backdrop open={this.state.favoritesOpened} data={data.slice(0, 15)} />
        </>
      )
    );
  };

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
          <ThemeProvider theme={theme}>
            <main>
              {this.renderFavorites()}
              <div>
                <GridHeader />
                <ul>
                  {data.map(item => (
                    <li key={item.id}>
                      <GridBodyRow
                        name={item.name}
                        image={item.image}
                        label={item.label}
                        onAddFavorite={this.addFavorite(item)}
                        onPlay={this.playRadio(item.id)}
                        isFavorite={this.state.favorites.includes(item)}
                        isPlaying={
                          this.state.selectedRadioId === item.id && this.state.isPlaying
                        }
                        isSelected={this.state.selectedRadioId === item.id}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </main>
          </ThemeProvider>
        )}
      </>
    );
  }
}

export default App;
const madeWithLove = () => {
  const textStyles = 'color: rgb(255, 32, 117); font-weight: bold; font-size: 2rem;';
  const reactColor = 'color: #61DAFB;';
  console.log(
    '%cMade with ❤️ and %cReact%c!',
    textStyles,
    textStyles + reactColor,
    textStyles,
  );
  console.log('%chttps://github.com/kostaslib', 'color: #052fb8;');
};
