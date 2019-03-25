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
  renderCarousel: boolean;
  favorites: number[];
}
class App extends Component<{}, IState> {
  readonly state: IState = {
    contentReady: false,
    favorites: [],
    renderCarousel: true,
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
  renderGrid = () => (
    <div>
      <GridHeader />
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <GridBodyRow
              name={item.name}
              image={item.image}
              label={item.label}
              onClick={this.addFavorite(item.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
  renderContent = () => (
    <>
      <Carousel data={this.favorites} />
      {this.renderGrid()}
    </>
  );
  /**
   * Loads only the necessary resources needed to avoid FOUC, such as fonts and styles as well as everything else included in the html.
   * This happens quickly because the browser is not asked to render anything to the DOM yet. The user will still see external resources,
   * such as images, being loaded so they are already wrapped by a placeholder.
   */
  renderBodyQuicklyWithInitialResources = () =>
    this.state.contentReady && (
      <main>
        {/* Render the tree after initial resources are loaded. */}
        {this.renderContent()}
      </main>
    );

  /**
   * Loads everything beforehand, including external resources and images. The content will be invisible during this time and
   * the user will continue seeing the spinner until everything is loaded. This can take a lot of time.
   */
  renderBodyWhenEverythingIsReady = () => (
    <main style={{ visibility: this.state.contentReady ? 'visible' : 'hidden' }}>
      {/* Render the tree but only reveal it when everything is ready. */}
      {this.renderContent()}
    </main>
  );

  render() {
    return (
      <>
        {!this.state.contentReady && <Loader hide={this.state.contentReady} />}
        {this.state.contentReady && (
          <main>
            <Carousel data={this.favorites} />
            {this.renderGrid()}
          </main>
        )}
        {/* {this.renderBodyQuicklyWithInitialResources()} */}
        {/* {this.renderBodyWhenEverythingIsReady()} */}
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
