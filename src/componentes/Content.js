import React from 'react';
import Hemiciclo from './Hemiciclo.js';
import Barras from './Barras.js';
import ChoroplethMap from './ChoroplethMap.js';



export default class Content extends React.Component {
    render(){

    return(
        <div>
        <div className="Content">
        <Hemiciclo resultados={this.props.resultados}
                   //test={this.props.test}
        />
        <Barras resultados={this.props.resultados}
                //test={this.props.test}
        />
        </div>
        <div className={"Maps"}>
        <ChoroplethMap  resultadosAno={this.props.resultadosAno}
                        onChangeRegion={this.props.onChangeRegion}
                        test={this.props.test}
                        anoActual={this.props.currentAno}
                        leyActual={this.props.currentLey}
        />
        </div>
        </div>
        );
    }
};
