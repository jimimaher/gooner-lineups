import React, { Component } from 'react';
import './App.css';

class StartingXI extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount () {
  }
  componentDidMount () {
    // console.log(mainState)
  }
  render() {
    let mainState = this.props.mainState;
    return (
      <div className="Starters">
          <ul>
            {
              mainState.squad.map(function(player){
                return <li key={'num' + player.number}> {player.name} </li>
              })
            }
          </ul>
      </div>
    );
  }
}

export default StartingXI;
