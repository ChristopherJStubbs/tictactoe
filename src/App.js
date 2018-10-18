import React, { Component } from 'react';
import './App.css';
import Board from'./Board.js'
import Square from './Square.js'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          SPACE TIC TAC TOE
        </header>
        <div className="Board-container">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
