import React from 'react';
import Content from './Content.js';
import ActionBar from './ActionBar.js';
import Test from './test.js';

//<Test test={this.props.test} onChangeTest={this.props.onChangeTest}/>
export default class Game extends React.Component {

    render(){
        return(
            <div>
            <h1>ElectoDB</h1>
            <ActionBar onChangeAno={this.props.onChangeAno}
                       onChangeLey={this.props.onChangeLey}
                       regionActual={this.props.regionActual}
                       anoActual={this.props.anoActual}
                       leyActual={this.props.leyActual}           />
            <Content    resultados={this.props.resultados}
                        currentRegion={this.props.currentRegion}
                        currentAno={this.props.currentAno}
                        currentLey={this.props.currentLey}
                        onChangeRegion={this.props.onChangeRegion}
                        onChangeAno={this.props.onChangeAno}
                        onChangeTest = {this.props.onChangeTest}
            />

            </div>

        );
    }
}
