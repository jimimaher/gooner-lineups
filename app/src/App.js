import React, { Component } from 'react';
import './App.css';
import players from './players';
import shuffle from './shuffle';
import StartingXI from './StartingXI';
import Tactical from './Tactical';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squad: [],
      // formattedSquad: {},
      formation: null,
      formationRows: null,
      formationSplit: null
    }
    this.generateXI = this.generateXI.bind(this)
    this.setFormation = this.setFormation.bind(this)
  }
  setFormation (event) {
    var positions = event.target.textContent.split('-').map(function(el){
      return Number(el)
    })
    this.setState({
      formation: event.target.textContent,
      formationRows: positions.length,
      formationSplit: positions
    })
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

    let renderTactical = null;
    if( this.state.squad.length === 11 ){
      renderTactical = <Tactical mainState={this.state} setFormation={this.setFormation} />
    }

    return (
      <div>
          <StartingXI
            setFormation={this.setFormation}
            mainState={this.state}
            generateXI={this.generateXI}
          />
          {renderTactical}
      </div>
    );
  }
}

export default App;
