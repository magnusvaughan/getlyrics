import React, { Component } from 'react';
import './App.css';
import LyricGetter from './components/LyricGetter/LyricGetter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LyricGetter />
      </div>
    );
  }
}

export default App;
