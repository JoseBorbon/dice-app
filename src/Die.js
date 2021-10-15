import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  render() {
    const input = `fas fa-dice-${this.props.diceNumber} fa-5x`;
    return <i className={`Die ${input} ${this.props.className}`}></i>;
  }
}

export default Die;
