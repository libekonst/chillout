import React, { Component } from 'react';
import data from './data';

import './loading.scss';
import './App.scss';
import './_normalize.scss';
import { Carousel } from './components/carousel';
import { GridBodyRow } from './components/grid/GridBodyRow';
import { GridHeader } from './components/grid/GridHeader';

class App extends Component {
  state = {
    renderCarousel: true,
    contentReady: false,
  };

  renderComponentTree = () => this.setState({ contentReady: true });

  componentDidMount() {
    // Mount the app component and wait for the styles to load and fonts to download, to avoid FOUC.
    // This happens quickly, because the DOM tree is empty and no other resources are requested to load yet.
    // Then render the component tree. Images are wrapped with a placeholder and have a fade in animation, so they load smoothly.
    window.addEventListener('load', this.renderComponentTree);
  }
  componentWillUnmount() {
    window.removeEventListener('load', this.renderComponentTree);
  }
  renderGrid = () => (
    <ul
      style={{
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      {data.map(item => (
        <li key={item.id}>
          <GridBodyRow name={item.name} image={item.image} label={item.label} />
        </li>
      ))}
    </ul>
  );

  // @ts-ignore
  showCarousel = () => this.setState(prev => ({ renderCarousel: !prev.renderCarousel }));
  render() {
    return (
      <>
        <div
          className={`loaderWrapper ${this.state.contentReady && 'loaderWrapper--hide'}`}
        >
          <div className="loader loader--outer" />
        </div>
        <main style={{ visibility: this.state.contentReady ? 'visible' : 'hidden' }}> {/* <- Start loading resources, but stay hidden. Takes longer because it loads everything first. */}
        {/* <- Don't start loading resources. Load only necessary styles then render the tree. */}
          {/* {this.state.contentReady && (   */}
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
              <GridHeader />
              {this.renderGrid()}
            </>
          {/* )} */}
        </main>
      </>
    );
  }
}

export default App;
