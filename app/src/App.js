import React, { Component } from 'react';
import './App.css';
import players from './players';
import shuffle from './shuffle';
import StartingXI from './StartingXI';
import Tactical from './Tactical';


const initialState = {
  squad: [],
  formation: null,
  formationRows: null,
  formationSplit: null
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
    this.resetState = this.resetState.bind(this)
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
  resetState() {
    this.setState(initialState)
  }
  componentWillMount () {
  }
  componentDidMount () {
  }
  render() {
    const fullSquad = players
    // console.log(fullSquad)

    let renderStarters = null;
    if( this.state.formation == null ){
      renderStarters =
        <StartingXI
          setFormation={this.setFormation}
          mainState={this.state}
          generateXI={this.generateXI}
          revealXI={this.revealXI}
        />
    }

    let renderTactical = null;
    if( this.state.squad.length === 11 ){
      renderTactical =
        <Tactical
          mainState={this.state}
          setFormation={this.setFormation}
        />
    }

    let renderInfo = null;
    if( this.state.squad.length === 0 ){
      renderInfo = <h3 className="intro">We have finally cracked the case on how Wenger makes team selections. He chooses at random! Now you can choose Arsenal's starting lineup just line Arsene!</h3>
    }

    let renderReset = null;
    if( this.state.squad.length === 11 && this.state.formation != null ){
      renderReset = <button className="medium" onClick={this.resetState}>Start Over</button>
    }

    return (
      <div>
          <div id="bg"></div>
          <h1>{ this.state.squad.length !== 0 ? 'Today\'s XI:' : 'Gooner Lineups' }</h1>
          {renderInfo}
          <button className="medium" onClick={this.generateXI}> { this.state.squad.length === 0 ? 'Build XI' : 'Tinker' } </button>
          {renderStarters}
          {renderTactical}
          {renderReset}

          <p>No affiliation with Arsenal FC</p>

      </div>
    );
  }
}

export default App;
