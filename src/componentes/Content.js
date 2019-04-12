import React from 'react';
import Hemiciclo from './Hemiciclo.js';


export default class Content extends React.Component {
    render(){
        
    return(
            <div className="Content">
		    <Hemiciclo resultado={this.props.resultado}/>                
            </div>
        );
    }
};
