import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './Tabs'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Tabs tabsId = "First-Tab-Example" >
            <div tabId = "Tab-1" label = "Tab 1" >
            tab content 1
            </div>
            <div tabId = "Tab2" label = "Tab 2" >
            tab content 2
            </div>
            <div tabId = "Tab3" label = "Tab 3 with title bigger" >
            tab content 3
            </div>
          </Tabs>
        </header>
      </div>
    );
  }
}

export default App;
