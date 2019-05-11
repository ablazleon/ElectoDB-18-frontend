import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from './componentes/Game'
import {dual, cambiaLey, cambiaAno, cambiaRegion, cambiaTest} from './redux/actions.js';
import Header from "./componentes/Header";
import {cambiaPartido} from "./redux/actions";
//import { Chart } from 'react-google-charts';



class App extends Component {

  /*componentWillMount() {
    let url = "http://localhost:8080/ISST-19-rest/rest/resultados?provincia=Alicante";
    fetch(url)
    .then(res => {
      return res.json();
    })
    .then(json => {
        this.props.dispatch(cambiaTest(json));
        console.log("algo");
    })
    .catch(error =>{
        console.log(error);
    });
  }*/

  render() {
      return (
      <div className = "Aplicacion">
        <Game currentRegion={this.props.currentRegion}
              currentAno={this.props.currentAno}
              currentLey={this.props.currentLey}
              resultados={this.props.resultados}
              onChangeLey={ (leyNueva)=> {this.props.dispatch(cambiaLey(leyNueva))}}
              onChangeAno={ (anoNueva) => {this.props.dispatch(cambiaAno(anoNueva))}}
              onChangeRegion = { (regionNueva) => {this.props.dispatch(cambiaRegion(regionNueva))}}
              onChangeTest = { (resultadosNuevos) => {this.props.dispatch(cambiaTest(resultadosNuevos))}}
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
