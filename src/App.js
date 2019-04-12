import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from './componentes/Game'
import {dual, cambiaLey, cambiaAno, cambiaRegion} from './redux/actions.js';


class App extends Component {

  render() {
     //console.log(this.props.resultados[0][0]);
     //console.log(this.props.currentAno)
     //console.log(this.props.currentRegion)
      return (
      <div className = "Aplicacion">
        <Game resultado={this.props.resultados[this.props.currentAno][this.props.currentRegion]}
              resultados={this.props.resultados}
              indexRegion={this.props.currentRegion}
              indexAno={this.props.currentAno}
              onChangeLey={ (id)=> {this.props.dispatch(cambiaLey(id))}}
              onChangeAno={ (buttonName) => {this.props.dispatch(cambiaAno(buttonName))}}/>
              

      </div>
      );
    }
}


function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);
