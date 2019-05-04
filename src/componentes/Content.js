import React from 'react';
import Hemiciclo from './Hemiciclo.js';
import Barras from './Barras.js';
import ChoroplethMap from './ChoroplethMap.js';



export default class Content extends React.Component {
    render(){

    return(
        <div>
        <div className="Content">
        <Hemiciclo resultado={this.props.resultado}/>
        <Barras resultado={this.props.resultado}/>
        </div>
        <div className={"Maps"}>
        <ChoroplethMap  resultadosAno={this.props.resultadosAno} onChangeRegion={this.props.onChangeRegion}/>
        </div>
        </div>
        );
    }
};
