import React, { Component } from 'react';
import data, { IRadio } from './data';

import './App.scss';
import './_normalize.scss';
import { Carousel } from './components/carousel';
import { GridBodyRow } from './components/grid/GridBodyRow';
import { GridHeader } from './components/grid/GridHeader';

class App extends Component {
  state = {
    data: data,
    renderCarousel: true,
  };
  renderGrid = () => {
    return data.map(item => (
      <li key={item.id}>
        <GridBodyRow name={item.name} image={item.image} label={item.label} />
      </li>
    ));
  };
  // @ts-ignore
  showCarousel = () => this.setState(prev => ({ renderCarousel: !prev.renderCarousel }));
  render() {
    return (
      <main style={{ paddingLeft: '20px', paddingRight: '20px' }}>
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
        <ul>{this.renderGrid()}</ul>
      </main>
    );
  }
}

export default App;
