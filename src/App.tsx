import React, { Component } from 'react';
import data, { IRadio } from './data';

import './App.scss';
import './_normalize.scss';
import { Carousel } from './components/carousel';
import { GridBodyRow } from './components/grid/GridBodyRow';
import { GridHeader } from './components/grid/GridHeader';

class App extends Component {
  state = {
    renderCarousel: true,
    // @ts-ignore
    loaded: false,
  };
  componentDidMount() {
    window.addEventListener('load', () => this.setState({ loaded: true }));
  }
  renderGrid = () => {
    return (
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <GridBodyRow name={item.name} image={item.image} label={item.label} />
          </li>
        ))}
      </ul>
    );
  };
  // @ts-ignore
  showCarousel = () => this.setState(prev => ({ renderCarousel: !prev.renderCarousel }));
  render() {
    return (
      <main
        style={{
          paddingLeft: '20px',
          paddingRight: '20px',
          visibility: this.state.loaded ? 'visible' : 'hidden',
        }}
      >
        {this.state.loaded && (
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
        )}
      </main>
    );
  }
}

export default App;
