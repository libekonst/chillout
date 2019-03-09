import React, { Component } from 'react';
import data from './data';

import './App.scss';
import './_normalize.scss';
import { Carousel } from './components/carousel';

class App extends Component {
  render() {
    return (
      <main>
        <Carousel data={data} step={7} />
      </main>
    );
  }
}

export default App;
