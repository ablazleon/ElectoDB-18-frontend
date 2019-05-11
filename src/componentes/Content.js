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
        <div className="Maps">
            <ChoroplethMap  resultados={this.props.resultados}
                            currentAno={this.props.currentAno}
                            currentLey={this.props.currentLey}
                            currentRegion={this.props.currentRegion}
                            onChangeRegion={this.props.onChangeRegion}
                            onChangeAno={this.props.onChangeAno}
                            onChangeTest = {this.props.onChangeTest}
            />
        </div>
        </div>
        );
    }
};

