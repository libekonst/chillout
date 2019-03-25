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
  favorites: IRadio[];
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

  addFavorite = (radio: IRadio) => (e: MouseEvent) => {
    this.setState(prevState => {
      if (prevState.favorites.includes(radio))
        return { favorites: prevState.favorites.filter(item => item !== radio) };
      return { favorites: [radio, ...prevState.favorites] };
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

  render() {
    return (
      <>
      {/* Don't wait for everything to load. */}
        {!this.state.contentReady && <Loader />}
        {this.state.contentReady && (
          <main>
            <Carousel data={this.state.favorites} />
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
