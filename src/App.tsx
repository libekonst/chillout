import React, { Component } from 'react';
import logo from './logo.svg';
import data from './data';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
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
