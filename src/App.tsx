import React, { Component } from 'react';
import data from './data';

import './App.css';
import './normalize.css';
import { Carousel } from './components/carousel';
import { GridBodyRow } from './components/grid/GridBodyRow';
import { GridHeader } from './components/grid/GridHeader';
import { Loader } from './loader/Loader';

class App extends Component {
  state = {
    renderCarousel: true,
    contentReady: false,
  };

  renderComponentTree = () => this.setState({ contentReady: true });

  componentDidMount() {
    /** The load event is fired when everything has been loaded, including images and external resources. */
    window.addEventListener('load', this.renderComponentTree);
  }
  componentWillUnmount() {
    window.removeEventListener('load', this.renderComponentTree);
  }
  renderGrid = () => (
    <div
      style={{
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      <GridHeader />
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <GridBodyRow name={item.name} image={item.image} label={item.label} />
          </li>
        ))}
      </ul>
    </div>
  );
  renderContent = () => (
    <>
      <button
        style={{
          width: '100px',
          height: '50px',
          backgroundColor: 'blue',
          color: 'pink',
        }}
        onClick={this.showCarousel}
      >
        {this.state.renderCarousel ? 'Hide Carousel' : 'Show Carousel'}
      </button>
      {this.state.renderCarousel && <Carousel data={data} step={7} />}
      {this.renderGrid()}
    </>
  );
  /**
   * Loads only the necessary resources needed to avoid FOUC, such as fonts and styles as well as everything else included in the html.
   * This happens quickly because the browser is not asked to render anything to the DOM yet. The user will still see external resources,
   * such as images, being loaded so they are already wrapped by a placeholder.
   */
  renderBodyQuicklyWithInitialResources = () =>
    this.state.contentReady && ( // <- Render the tree after initial resources are loaded.
      <main>
        {this.renderContent()}
      </main>
    );

  /** 
   * Loads everything beforehand, including external resources and images. The content will be invisible during this time and
   * the user will continue seeing the spinner until everything is loaded. This can take a lot of time.
   */
  renderBodyWhenEverythingIsReady = () => (
    <main style={{ visibility: this.state.contentReady ? 'visible' : 'hidden' }}> {/* <- Render the tree but reveal it when everything is ready. */}
      {this.renderContent()}
    </main>
  );
  // @ts-ignore
  showCarousel = () => this.setState(prev => ({ renderCarousel: !prev.renderCarousel }));
  render() {
    return (
      <>
        {!this.state.contentReady && <Loader hide={this.state.contentReady} />}
        {this.renderBodyQuicklyWithInitialResources()}
        {/* {this.renderBodyWhenEverythingIsReady()} */}
      </>
    );
  }
}

export default App;
