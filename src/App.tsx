import React, { Component } from 'react';
import data from './data';

import './App.scss';
import './_normalize.scss';
import { Carousel } from './components/carousel';
import { GridBodyRow } from './components/grid/GridBodyRow';
import { GridHeader } from './components/grid/GridHeader';

class App extends Component {
  render() {
    return (
      <main>
        <Carousel data={data} step={7} />
        <GridHeader />
        <ul>
          <li>
            <GridBodyRow />
          </li>
          <li>
            <GridBodyRow />
          </li>
          <li>
            <GridBodyRow />
          </li>
        </ul>
      </main>
    );
  }
}

export default App;
