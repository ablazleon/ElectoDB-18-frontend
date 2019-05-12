import React from 'react';
import Boton from './Boton.js'
import Selector from './Selector.js'
import SelectorNacional from './SelectorNacional.js'

export default class ActionBar extends React.Component {
    render(){

        return(

            <div className="ActionBar">

            <SelectorNacional resultados={this.props.resultados}
                      currentAno={this.props.currentAno}
                      currentLey={this.props.currentLey}
            />
            <Boton buttonName="2011" 
                onChangeAno={this.props.onChangeAno}
                onChangeTest = {this.props.onChangeTest}
                currentRegion={this.props.currentRegion}
                currentAno={this.props.currentAno}
                currentLey={this.props.currentLey}/>
            <Boton buttonName="2015" 
                onChangeAno={this.props.onChangeAno}
                onChangeTest = {this.props.onChangeTest}
                currentRegion={this.props.currentRegion}
                currentAno={this.props.currentAno}
                currentLey={this.props.currentLey}/>
            <Boton buttonName="2016" 
                onChangeAno={this.props.onChangeAno}
                onChangeTest = {this.props.onChangeTest}
                currentRegion={this.props.currentRegion}
                currentAno={this.props.currentAno}
                currentLey={this.props.currentLey}/>
            <Selector 
                onChangeLey={this.props.onChangeLey}
                onChangeTest = {this.props.onChangeTest}
                currentRegion={this.props.currentRegion}
                currentAno={this.props.currentAno}
                currentLey={this.props.currentLey}/>
            </div>
        );
    }
}
//<Boton buttonName="2019" onChangeAno={this.props.onChangeAno}/>