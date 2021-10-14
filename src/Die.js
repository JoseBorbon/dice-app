import React, { Component } from 'react';

class Die extends Component {
  render() {
    const input = `fas fa-dice-${this.props.diceNumber} fa-5x`;
    return (
      <div>
        <i class={input}></i>
      </div>
    );
  }
}

export default Die;
