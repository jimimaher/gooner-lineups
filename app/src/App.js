import React, { Component } from 'react';
import './App.css';
import players from './players';
import shuffle from './shuffle';
import StartingXI from './StartingXI';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squad: []
    }
    this.generateXI = this.generateXI.bind(this)
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
    this.generateXI()
  }
  componentDidMount () {
  }
  render() {
    return (
        <StartingXI
          mainState={this.state}
          generateXI={this.generateXI}
        />
    );
  }
}

export default App;
