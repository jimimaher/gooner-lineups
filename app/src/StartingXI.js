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
        <button onClick={this.generateXI}> Generate new XI </button>
          <ul>
            hi flubis i luv u
            {
              // console.log(this.props.mainState)
              this.props.mainState.squad.map(function(player){
                return <li key={'num' + player.number}> {player.name} </li>
              })
            }
          </ul>
      </div>
    );
  }
}

export default StartingXI;
