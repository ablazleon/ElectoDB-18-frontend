import React from 'react';
import Boton from './Boton.js'
import Selector from './Selector.js'
import Content from "./Content";
export default class ActionBar extends React.Component {
    render(){

        return(
            <div className="ActionBar">
            <Boton buttonName="2019" onChangeAno={this.props.onChangeAno}/>
		        <Boton buttonName="2016" onChangeAno={this.props.onChangeAno}/>
            <Boton buttonName="2015" onChangeAno={this.props.onChangeAno}/>
            <Boton buttonName="2011" onChangeAno={this.props.onChangeAno}/>
            <Selector onChangeLey={this.props.onChangeLey}/>
            </div>
        );
    }
}
