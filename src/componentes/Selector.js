import React from 'react';

export default class Selector extends React.Component {

  constructor(props){
      super(props);
      //this.Selecta = this.Selecta.bind(this);
      this.CreadorEscenario = this.CreadorEscenario.bind(this);
  }

 /* Selecta(id) {
      switch(id){
          case 0:
            return this.props.onChangeLey(0);
          case 1:
            return this.props.onChangeLey(1);
          default:
            return this.props.onChangeLey(0);
      }
  }*/

    CreadorEscenario(Ley){
        let ano = this.props.anoActual
        let ley = Ley;
        let region = this.props.regionActual;
        let escenarioNuevo = {"ano": ano, "region": region, "ley": ley};
        return this.props.onChangeLey(escenarioNuevo);
    }

    render(){
        return(
          <select id="lang">
                            <option onChange={()=>this.CreadorEscenario(0)}>Ley D'Hondt</option>
                            <option onChange={()=>this.CreadorEscenario(1)}>Ley Sainte-Laguë</option>
          </select>

        );
    }
}
