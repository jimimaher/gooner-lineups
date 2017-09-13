
import React, { Component } from 'react';
import './App.css';

class Tactical extends Component {
  constructor(props) {
    super(props)
    this.setFormation = this.setFormation.bind(this)
    this.buildTacticalLineup = this.buildTacticalLineup.bind(this)
  }
  setFormation(event) {
    this.buildTacticalLineup()
    this.props.setFormation(event)
    this.props.mainState.formation !== null ? event.target.textContent = this.props.mainState.formation : event.target.remove()
  }
  componentWillMount () {
  }
  componentDidMount () {
  }
  buildTacticalLineup() {
    if (this.props.mainState.formationSplit != null ){
      var tacticalObject = [
        0: [],
        1: [],
        2: [],
        3: [],
        4: []
      ];
      console.log( 'row0 GK - '+ this.props.mainState.squad[0].name )

      for( var i = 1; i < Number(this.props.mainState.formationSplit[0]) + 1; i++ ){
        console.log( 'row1 DEF - '+ this.props.mainState.squad[i].name )
        //put these guys in row 1
      }

      for( var i = Number(this.props.mainState.formationSplit[0] + 1); i < Number(this.props.mainState.formationSplit[1]) + 1; i++ ){
        console.log( 'row2 MID - '+ this.props.mainState.squad[i].name )
        //put these guys in row 1
      }
    }
  }
  render() {

    let state = this.props.mainState;
    return (
      <div className="Tactic">
        <h1>
          { state.formation === null ? 'Choose your formation:' : 'Formation: ' + state.formation }
        </h1>

        <div id="formations">
          <button onClick={this.setFormation}>4-3-3</button>
          <button onClick={this.setFormation}>4-3-1-2</button>
          <button onClick={this.setFormation}>4-2-3-1</button>
          <button onClick={this.setFormation}>3-4-3</button>
        </div>

        <div id="tacticalLineup" className={ 'rows-'+(state.formation != null ? state.formation.split('-').length : null) }>
          <div className="row gk">
            // <div>{ state.squad.length > 0 ? state.squad[0].name : null }</div>
          </div>
          <div className="row">
          </div>
          <div className="row">
          </div>
          <div className="row">
          </div>
          <div className="row">
          </div>
        </div>
      </div>
    );
  }
}

export default Tactical;
