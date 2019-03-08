import React, { Component } from 'react';
import data from './data';

import './App.scss';
import './_normalize.scss';
import { Card } from './components/card/Card';
import { Carousel } from './components/carousel';

class App extends Component {
  render() {
    return (
      <>
        <Carousel data={data} step={7} />
      </>
    );
  }
}

export default App;
