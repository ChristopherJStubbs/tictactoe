import React, { Component } from 'react';
import './App.css';
import Board from'./Board.js'
import Square from './Square.js'

class PickableCharacters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      emojis: ['😎', '🐶', '🐱', '💵', '🚀', '🌕', '🦄'],
      player1: '',
      player2: ''
    }


  }

  selectEmoji(i){
    this.setState({
      player1: this.state.emojis[i],
      player2: this.state.emojis[i],
    })
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

//create an array of emojis
//import emojis into function that allows players to choose before game starts
//function will override (setState) the X and O values


export default PickableCharacters;
