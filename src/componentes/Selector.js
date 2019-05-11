import React from 'react';

export default class Selector extends React.Component {

  constructor(props){
      super(props);
      //this.Selecta = this.Selecta.bind(this);
      this.CreadorEscenario = this.CreadorEscenario.bind(this);
  }

  CreadorEscenario(Ley){
    return this.props.onChangeLey(Ley);
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
