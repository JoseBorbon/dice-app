import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1: 'six',
      dice2: 'six',
      isShaking: false,
    };
    // this.roll = this.roll.bind(this);
    // this.removeShake = this.removeShake.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  static defaultProps = {
    diceMap: ['one', 'two', 'three', 'four', 'five', 'six'],
  };

  roll() {
    this.setState({
      dice1: RollDice.defaultProps.diceMap[Math.floor(Math.random() * 6)],
      dice2: RollDice.defaultProps.diceMap[Math.floor(Math.random() * 6)],
      isShaking: true,
    });
  }

  removeShake() {
    if (this.state.isShaking === false) {
      setTimeout(() => {
        this.setState({ isShaking: false });
      }, 1000);
    }
  }

  handleClick() {
    this.roll();
    this.removeShake();
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die
            diceNumber={this.state.dice1}
            className={this.state.isShaking ? 'RollDice-shake' : ''}
          />
          <Die
            diceNumber={this.state.dice2}
            className={this.state.isShaking ? 'RollDice-shake' : ''}
          />
        </div>
        <button onClick={this.handleClick}>
          {this.state.isShaking ? 'Rolling Dice OH MY EF GEE~' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDice;
