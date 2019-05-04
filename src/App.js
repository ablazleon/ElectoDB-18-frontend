import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from './componentes/Game'
import {dual, cambiaLey, cambiaAno, cambiaRegion, cambiaTest} from './redux/actions.js';
import Header from "./componentes/Header";
//import { Chart } from 'react-google-charts';



class App extends Component {

  componentDidMount() {
    console.log("funciona");
    let url = "http://localhost:8080/ISST-19-rest/rest/resultados";
    fetch(url)
    .then(res => {
      //this.props.dispatch(this.setState({test: "Cambio"}));
      return res.json();
    })
    .then(json => {
      this.props.dispatch(cambiaTest(JSON.stringify(json)));
    })
    .catch(error =>{
        console.log(error)
    });
  }

  render() {
     //console.log(this.props.resultados[0][0]);
     //console.log(this.props.currentAno)
     //console.log(this.props.currentRegion)
let resultados= "Madrid " +"PP: "+ this.props.resultados[this.props.currentAno][0]["PP"][0]+
                " PSOE: "+this.props.resultados[this.props.currentAno][0]["PSOE"][0]+
                " Podemos"+this.props.resultados[this.props.currentAno][0]["Podemos"][0]+
                " Ciu: "+this.props.resultados[this.props.currentAno][0]["CiU"][0] +
                "Color ganador: "+this.props.resultados[this.props.currentAno][0]["color"];
      return (
      <div className = "Aplicacion">
        <Game resultado={this.props.resultados[this.props.currentAno][this.props.currentRegion]}
              resultadosAno={this.props.resultados[this.props.currentAno]}
              resultados={this.props.resultados}
              indexRegion={this.props.currentRegion}
              indexAno={this.props.currentAno}
              test = {this.props.test}
              onChangeLey={ (id)=> {this.props.dispatch(cambiaLey(id))}}
              onChangeAno={ (buttonName) => {this.props.dispatch(cambiaAno(buttonName))}}
              onChangeTest = { (nuevoTest) => {this.props.dispatch(cambiaTest(nuevoTest))}}/>
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
