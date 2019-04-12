import React from 'react';
import Hemiciclo from './Hemiciclo.js';
import Barras from './Barras.js';


export default class Content extends React.Component {
    render(){

    return(
        <div className="Content">
        <Hemiciclo resultado={this.props.resultado}/>
        <Barras resultado={this.props.resultado}/>
        </div>
        );
    }
};
