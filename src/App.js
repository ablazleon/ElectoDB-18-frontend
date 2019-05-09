import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from './componentes/Game'
import {dual, cambiaLey, cambiaAno, cambiaRegion, cambiaTest} from './redux/actions.js';
import Header from "./componentes/Header";
import {cambiaPartido} from "./redux/actions";
//import { Chart } from 'react-google-charts';



class App extends Component {

  componentWillMount() {
    let url = "http://localhost:8080/ISST-19-rest/rest/resultados?provincia=Alicante";
    fetch(url)
    .then(res => {
      return res.json();
    })
    .then(json => {
        this.props.dispatch(cambiaTest(json));
    })
    .catch(error =>{
        console.log(error);
    });
  }

  render() {
      return (
      <div className = "Aplicacion">
        <Game regionActual={this.props.currentRegion}
              anoActual={this.props.currentAno}
              leyActual={this.props.currentLey}
              resultados={this.props.resultados}
              onChangeLey={ (escenarioNuevo)=> {this.props.dispatch(cambiaLey(escenarioNuevo))}}
              onChangeAno={ (escenarioNuevo) => {this.props.dispatch(cambiaAno(escenarioNuevo))}}
              onChangeRegion = { (escenarioNuevo) => {this.props.dispatch(cambiaRegion(escenarioNuevo))}}
              onChangeTest = { (escenarioInicial) => {this.props.dispatch(cambiaTest(escenarioInicial))}}
        />
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
