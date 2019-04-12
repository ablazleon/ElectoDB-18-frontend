import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from './componentes/Game'
import {dual, cambiaLey, cambiaAno, cambiaRegion} from './redux/actions.js';
import ChoroplethMap from './components/ChoroplethMap';

class App extends Component {

  /*render() {

      return (
      <div className = "Aplicacion">
        <Game resultado={this.props.resultados[this.props.currentAno[this.prop]]}
              resultados={this.props.resultados}
              indexRegion={this.props.currentRegion}
              indexAno={this.props.currentAno}
              onChangeAno={ (buttonName) => {this.props.dispatch(cambiaAno(buttonName))}}/>

      </div>
      );
    }*/
    state = {
        data: [
            ["MB", 75], ["SK", 43], ["AB", 50], ["BC", 88], ["NU", 21], ["NT", 43],
            ["YT", 21], ["ON", 19], ["QC", 60], ["NB", 4], ["NS", 44], ["NF", 38],
            ["PE", 67]],
    }
    render() {
        return (
            <div style={{
                height:"100vh",
                width: "100vw"
            }}>
                <ChoroplethMap data={this.state.data}/>
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
