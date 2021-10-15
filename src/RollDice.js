import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  static defaultProps = {
    diceMap: ['one', 'two', 'three', 'four', 'five', 'six'],
  };
  constructor(props) {
    super(props);
    this.state = {
      dice1: 'six',
      dice2: 'six',
      isShaking: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  roll() {
    this.setState({
      dice1:
        RollDice.defaultProps.diceMap[
          Math.floor(Math.random() * this.props.diceMap.length)
        ],
      dice2:
        RollDice.defaultProps.diceMap[
          Math.floor(Math.random() * this.props.diceMap.length)
        ],
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
        <button
          onClick={this.handleClick}
          disabled={this.state.isShaking}
          className={this.state.isShaking ? 'RollDice-disable' : ''}
        >
          {this.state.isShaking ? 'Rolling Dice OH MY EF GEE~' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDice;
