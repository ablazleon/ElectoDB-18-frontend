import React from 'react';
import Hemiciclo from './Hemiciclo.js';
import Map from './ChoroplethMap.js';


export default class Content extends React.Component {
    render(){

    return(
          <div>
            <div className="Content">
		    <Hemiciclo resultado={this.props.resultado}/>
            </div>
            <div className="Content">
            <Map resultado={this.props.resultado}/>
            </div>
          </div>
        );
    }
};
