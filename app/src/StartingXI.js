import React, { Component } from 'react';
import './App.css';
import players from './players';
import shuffle from './shuffle';

class StartingXI extends Component {
  constructor(props) {
    super(props)
    this.generateXI = this.generateXI.bind(this)
  }
  generateXI() {
    this.props.generateXI()
  }
  componentWillMount () {
  }
  componentDidMount () {
    console.log(this.props.mainState)
  }
  render() {
    return (
      <div className="Starters">
          <h1>{ this.props.mainState.squad.length != 0 ? 'Today\'s XI' : ' ' }</h1>
          <ul>
            {
              this.props.mainState.squad.map(function(player){
                return <li key={'num' + player.number}> {player.name} </li>
              })
            }
          </ul>
          <button onClick={this.generateXI}> { this.props.mainState.squad.length == 0 ? 'Build XI' : 'Rebuild XI' } </button>
      </div>
    );
  }
}

export default StartingXI;
