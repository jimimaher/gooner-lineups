import React, { Component } from 'react';
import './App.css';

class PlayerCard extends Component {
  render () {
    let player = this.props.player;

    return(
        <div className="playerCard">
          {player.name}
          <span> {player.number}</span>
        </div>
    )
  }
}

export default PlayerCard
