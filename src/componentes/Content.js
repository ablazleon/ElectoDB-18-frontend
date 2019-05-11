import React from 'react';
import Hemiciclo from './Hemiciclo.js';
import Barras from './Barras.js';
import ChoroplethMap from './ChoroplethMap.js';



export default class Content extends React.Component {
    render(){

    return(
        <div>
        <div className="Content">
        <Hemiciclo resultados={this.props.resultados}/>
        <Barras resultados={this.props.resultados}/>
        </div>
        <div className={"Maps"}>
            <ChoroplethMap  resultados={this.props.resultados}
                            onChangeRegion={this.props.onChangeRegion}
                            onChangeAno={this.props.onChangeAno}
                            anoActual={this.props.anoActual}
                            leyActual={this.props.leyActual}
                            onChangeTest = {this.props.onChangeTest}
            />
        </div>
        </div>
        );
    }
};

