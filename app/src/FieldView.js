
import React, { Component } from 'react';
import './App.css';

class FieldView extends Component {
  render () {
    return(
      <div id="tacticalLineup" className={ 'rows-'+(this.props.mainState.formation != null ? this.props.mainState.formation.split('-').length : null) }>
        <div className="row gk">
          {this.props.keeper}
        </div>
        <div className="row">
          {this.props.defenders}
        </div>
        <div className="row">
          {this.props.mids}
        </div>
        <div className="row">
          {this.props.attackers}
        </div>
        <div className="row">
          {this.props.strikers}
        </div>
      </div>
    )
  }
}

export default FieldView
