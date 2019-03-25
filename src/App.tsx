import React, { Component, MouseEvent } from 'react';
import data, { IRadio } from './data';

import './App.css';
import { Carousel } from './components/carousel';
import { GridBodyRow } from './components/grid/GridBodyRow';
import { GridHeader } from './components/grid/GridHeader';
import { Loader } from './loader/Loader';
import './normalize.css';

interface IState {
  contentReady: boolean;
  selectedRadioId?: number;
  isPlaying: boolean;
  favorites: number[];
}
class App extends Component<{}, IState> {
  readonly state: IState = {
    contentReady: false,
    favorites: [],
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

  addFavorite = (id: number) => (e: MouseEvent) => {
    this.setState(prevState => {
      if (prevState.favorites.includes(id))
        return { favorites: prevState.favorites.filter(itemID => itemID !== id) };
      return { favorites: [id, ...prevState.favorites] };
    });
  };

  renderComponentTree = () => this.setState({ contentReady: true });
  componentDidMount() {
    /** The load event is fired when everything has been loaded, including images and external resources. */
    window.addEventListener('load', this.renderComponentTree);
    madeWithLove();
  }
  componentWillUnmount() {
    window.removeEventListener('load', this.renderComponentTree);
  }
  /**
   * Returns an array of radios, based on the IDs stored in `this.state.favorites`.
   * If a radio with that ID no longer exists, it will be ignored.
   */
  get favorites(): IRadio[] {
    console.log(this.state.favorites);

    // Array.prototype.find() will return `undefined` if it can't find the element.
    // Non null assertion in col 72: filter(Boolean) will clear all falsy values, including undefined.
    return this.state.favorites
      .map(id => data.find(it => it.id === id)!)
      .filter(Boolean);
  }

  render() {
    return (
      <>
        {!this.state.contentReady && <Loader />}
        {this.state.contentReady && (
          <main>
            <Carousel data={this.favorites} />
            <div>
              <GridHeader />
              <ul>
                {data.map(item => (
                  <li key={item.id}>
                    <GridBodyRow
                      name={item.name}
                      image={item.image}
                      label={item.label}
                      onAddFavorite={this.addFavorite(item.id)}
                      onPlay={this.playRadio(item.id)}
                      isFavorite={this.state.favorites.includes(item.id)}
                      isPlaying={this.state.selectedRadioId === item.id && this.state.isPlaying}
                      isSelected={this.state.selectedRadioId === item.id}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </main>
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
