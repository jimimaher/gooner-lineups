import React, { Component } from 'react';
import './App.css';
import players from './players';
import shuffle from './shuffle';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squad: []
    }
    this.generateXI = this.generateXI.bind(this)
    let fullSquad = players
  }
  generateXI () {
    shuffle(players)
    let todaysXI = players.slice(0, 11)
    this.setState({
      squad: todaysXI.map(function(el, i){
        return { name: el.name, number: el.jerseyNumber, pos: el.position  }
      })
    })
  }
  componentWillMount () {
  }
  componentDidMount () {
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.generateXI}> Generate new XI </button>
          <ul>
            {
              this.state.squad.map(function(player){
                return <li key={'num' + player.number}> {player.name} </li>
              })
            }
          </ul>
      </div>
    );
  }
}

export default App;
