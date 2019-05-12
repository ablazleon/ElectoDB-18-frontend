import React from 'react';

export default class SelectorNacional extends React.Component {

  constructor(props){
      super(props);
      //this.Selecta = this.Selecta.bind(this);
      this.CambiarRegion = this.CambiarRegion.bind(this);
    //  this.cambiarDeValor = this.cambiarDeValor.bind(this);
  }

  CambiarRegion(region){
    let ano = this.props.currentAno;
    let ley = this.props.currentLey;
    let datosAntiguo = this.props.resultados;
    console.log("la region que envio es: ")
    console.log(region);
    let url = 'http://localhost:8080/ISST-19-rest/rest/resultados?anno='+ano+'&provincia='+region+'&leyEscano='+ley;
    fetch(url)
    .then(res => {
        return res.json();

    })
    .then(json => {
        this.props.onChangeRegion(region);
        return(this.props.onChangeTest(json));

    })
    .catch(error =>{
        console.log(error);
    });
  }


  render(){

    return(
      <select class="custom-select" onChange= {(e) => this.CambiarRegion(e.target.value)}>
        <option value="Nacional">NACIONAL</option>
        <option value="Madrid">POR CIRCUNSCRIPCIÓN</option>
      </select>
    );
  }
}
