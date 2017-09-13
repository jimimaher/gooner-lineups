import React, { Component } from 'react';
import './App.css';
import PlayerCard from './PlayerCard';

class FieldView extends Component {
  render () {
    // console.log(this.props.midsArray)
    return(
      <div>
        <h2> Tactical Lineup </h2>

        <div id="tacticalLineup" className={ 'rows-'+(this.props.mainState.formation != null ? this.props.mainState.formation.split('-').length : null) }>
          <div className="row gk">
            {
              this.props.keeperArray.map(function(el){
                return <PlayerCard key={'num'+el.number} player={el}/>
              })
            }
          </div>
          <div className="row">
            {
              this.props.defendersArray.map(function(el){
                return <PlayerCard key={'num'+el.number} player={el}/>
              })
            }
          </div>
          <div className="row">
            {
              this.props.midsArray.map(function(el){
                return <PlayerCard key={'num'+el.number} player={el}/>
              })
            }
          </div>
          <div className="row">
            {
              this.props.attackersArray.map(function(el){
                return <PlayerCard key={'num'+el.number} player={el}/>
              })
            }
          </div>
          <div className="row">
            {
              this.props.strikersArray.map(function(el){
                return <PlayerCard key={'num'+el.number} player={el}/>
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default FieldView
