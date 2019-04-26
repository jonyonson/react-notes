import React, { Component } from 'react';
import Note from '../Note/Note';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Note />
        </header>
      </div>
    );
  }
}

export default App;
