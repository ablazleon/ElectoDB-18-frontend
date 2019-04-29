import React from 'react';

export default class Selector extends React.Component {

  constructor(props){
      super(props);
      this.Selecta = this.Selecta.bind(this);
  }

  Selecta(id) {
      switch(id){
          case 0:
            return this.props.onChangeLey(0);
          case 1:
            return this.props.onChangeLey(1);
          default:
            return this.props.onChangeLey(0);
      }
  }

    render(){
        return(
          <select id="lang">
                            <option onChange={()=>this.Selecta(0)}>Ley D'Hondt</option>
                            <option onChange={()=>this.Selecta(1)}>Ley Sainte-Laguë</option>
          </select>

        );
    }
}
