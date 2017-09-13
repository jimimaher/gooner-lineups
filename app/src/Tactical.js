
import React, { Component } from 'react';
import './App.css';
import FieldView from './FieldView';

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
    let mainState = this.props.mainState;
    let formSplit = mainState.formationSplit;
    let squad = mainState.squad;
    let keeper = '', defenders = '', mids = '', attackers = '', strikers = '';

    if (formSplit != null ){
      // console.log( 'row0 GK - '+ squad[0].name )
      keeper = squad[0].name

      for( var i = 0; i < formSplit[0]; i++){
        // defenders += '<div class="def">'+squad[i].name+'</div>'
        defenders += squad[i].name + ' '
      }

      let nextRow = formSplit[0] + formSplit[1];
      for( var h = formSplit[0]; h < nextRow; h++){
        // mids += '<div class="mid">'+squad[h].name+'</div>'
        mids += squad[h].name + ' '
      }

      let nextRow2 = formSplit[0] + formSplit[1] + formSplit[2];
      for( var j = nextRow; j < nextRow2; j++){
        // attackers += '<div class="att">'+squad[j].name+'</div>'
        attackers += squad[j].name + ' '
      }

      let nextRow3 = formSplit[0] + formSplit[1] + formSplit[2] + formSplit[3];
      for( var k = nextRow2; k < nextRow3; k++){
        // strikers += '<div class="st">'+squad[k].name+'</div>'
        strikers += squad[k].name + ' '
      }
    }

    let renderFieldView = null;
    if( mainState.formation != null ){
      renderFieldView =
          <FieldView
            mainState={mainState}
            keeper={keeper}
            defenders={defenders}
            mids={mids}
            attackers={attackers}
            strikers={strikers}
          />
    }

    return (
      <div className="Tactic">
        <h1>
          { mainState.formation === null ? 'Choose your formation:' : 'Formation: ' + mainState.formation }
        </h1>

        <div id="formations">
          <button onClick={this.setFormation}>4-3-3</button>
          <button onClick={this.setFormation}>4-3-1-2</button>
          <button onClick={this.setFormation}>4-2-3-1</button>
          <button onClick={this.setFormation}>3-4-3</button>
        </div>

        {renderFieldView}

      </div>
    );
  }
}

export default Tactical;
