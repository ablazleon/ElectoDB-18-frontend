import React from 'react';

export default class Selector extends React.Component {

  constructor(props){
      super(props);
      //this.Selecta = this.Selecta.bind(this);
      this.CreadorEscenario = this.CreadorEscenario.bind(this);
      this.cambiarDeValor = this.cambiarDeValor.bind(this);
  }

  CreadorEscenario(Ley){
    return this.props.onChangeLey(Ley);
  }

  cambiarDeValor(valor){
        if(valor === 0)
          return 1;
        else
          return 0;
  }

  render(){

    return(
      <select id="lang" onChange = {() => this.CreadorEscenario(this.cambiarDeValor(this.props.currentLey))}>
        <option>Ley D'Hondt</option>
        <option>Ley Sainte-Laguë</option>
      </select>
    );
  }
}
