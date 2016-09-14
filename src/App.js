import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StickyNote from './component/StickyNote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Sticky Notes</p>
        </div>
        <br />
        <div className="App-intro">
          <StickyNote />
        </div>
      </div>
    );
  }
}

export default App;
