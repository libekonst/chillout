import React, { Component } from 'react';
import data from './data';
import './App.scss';
import { RadioCardA } from './components/RadioCardA';

class App extends Component {
  render() {
    return (
      <div className="App">
         <RadioCardA />
        {/* <ul>
          {data.map(item => (
            <li>
              {Object.entries(item).map(i => (
                <p>{`${i[0]} : ${i[1]}`}</p>
              ))}
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default App;
