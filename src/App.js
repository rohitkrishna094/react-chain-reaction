import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';

// prettier-ignore
const arr = [
  [3, 1, 3, 1, 3, 1],
  [1, 3, 1, 2, 3, 1],
  [3, 3, 2, 3, 2, 1],
  [1, 2, 1, 3, 2, 2],
  [2, 2, 0, 2, 3, 3],
  [3, 2, 2, 1, 2, 1],
  [2, 3, 1, 3, 3, 2],
  [1, 3, 3, 2, 2, 2],
  [2, 2, 2, 1, 2, 2],
  [3, 1, 1, 3, 1, 0],
]

class App extends Component {
  state = { array: arr };
  render() {
    return (
      <div className="App">
        <Board array={this.state.array} />
      </div>
    );
  }
}

export default App;
