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
    var captainIndex = Math.floor((Math.random() * 11));
    return (
      <div className="Starters">
          <ul>
            {
              mainState.squad.map(function(player, i){
                let classAdd = captainIndex == i ? 'captain' : null
                return <li className={classAdd} key={'num' + player.number}> {player.name} </li>
              })
            }
          </ul>
      </div>
    );
  }
}

export default StartingXI;
