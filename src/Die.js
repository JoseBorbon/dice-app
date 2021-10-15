import React, { Component } from 'react';

class Die extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const input = `fas fa-dice-${this.props.diceNumber} fa-5x`;
    return (
      <div>
        <i className={`${input} ${this.props.className}`}></i>
      </div>
    );
  }
}

export default Die;
