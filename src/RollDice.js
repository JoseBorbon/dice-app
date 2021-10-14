import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.defaultProps = {
      diceMap: ['one', 'two', 'three', 'four', 'five', 'six'],
    };
    this.state = {
      dice1: 'six',
      dice2: 'six',
    };
    this.roll = this.roll.bind(this);
  }

  roll() {
    this.setState({
      dice1: this.defaultProps.diceMap[Math.floor(Math.random() * 6)],
      dice2: this.defaultProps.diceMap[Math.floor(Math.random() * 6)],
    });
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die diceNumber={this.state.dice1} />
          <Die diceNumber={this.state.dice2} />
        </div>
        <button onClick={this.roll}>Roll Dice!</button>
      </div>
    );
  }
}

export default RollDice;
