import React, { Component } from 'react';
import './App.css';

class Tactical extends Component {
  constructor(props) {
    super(props)
    this.setFormation = this.setFormation.bind(this)
  }
  setFormation(event) {
    this.props.setFormation(event)
    this.props.mainState.formation !== null ? event.target.textContent = this.props.mainState.formation : event.target.remove()
  }
  componentWillMount () {

  }
  componentDidMount () {
  }
  render() {
    return (
      <div className="Tactic">
        <h1>
          { this.props.mainState.formation === null ? 'Choose your formation:' : 'Formation: ' + this.props.mainState.formation }
        </h1>

        <div id="formations">
          <button onClick={this.setFormation}>4-3-3</button>
          <button onClick={this.setFormation}>4-3-1-2</button>
          <button onClick={this.setFormation}>4-2-3-1</button>
          <button onClick={this.setFormation}>3-4-3</button>
        </div>

        <div id="test">
          {
            // this.props.mainState.formationSplit.map(function(el, i){
            //   <div> YAS </div>
            // })
          }
        </div>
      </div>
    );
  }
}

export default Tactical;
