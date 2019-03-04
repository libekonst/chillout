import React, { Component } from 'react';
import data from './data';

import './App.scss';
import './_normalize.scss';
import { CardContainer } from './components/RadioCard';
import { Carousel } from './components/carousel';

class App extends Component {
  render() {
    return (
      <>
        {/* <CardContainer /> */}
        {/* <CardContainer /> */}
        <Carousel data={data} />
        {/* <ul>
          {data.map(item => (
            <li>
              {Object.entries(item).map(i => (
                <p>{`${i[0]} : ${i[1]}`}</p>
              ))}
            </li>
          ))}
        </ul> */}
      </>
    );
  }
}

export default App;
