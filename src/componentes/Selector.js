import React from 'react';



export default class Selector extends React.Component {



    render(){
        return(


        <select onChange= {(e) => this.props.onChangeLey(e.target.value)}>
          <option value="0">Ley D'Hondt</option>
          <option value="1">Ley Sainte-Laguë</option>
        </select>


        );
    }
}
