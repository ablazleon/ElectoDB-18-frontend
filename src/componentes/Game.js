import React from 'react';
import Content from './Content.js';
import ActionBar from './ActionBar.js';

//<Test test={this.props.test} onChangeTest={this.props.onChangeTest}/>
export default class Game extends React.Component {

    render(){
        return(
            <div>
            <h1 class="Entrada">ElectoDB</h1>
            <ActionBar class="ActionBar"
                       onChangeAno={this.props.onChangeAno}
                       onChangeLey={this.props.onChangeLey}
                       onChangeTest = {this.props.onChangeTest}
                       onChangeRegion = {this.props.onChangeRegion}
                       currentRegion={this.props.currentRegion}
                       currentAno={this.props.currentAno}
                       currentLey={this.props.currentLey}/>
            <Content  resultados={this.props.resultados}
                        currentRegion={this.props.currentRegion}
                        currentAno={this.props.currentAno}
                        currentLey={this.props.currentLey}
                        onChangeRegion={this.props.onChangeRegion}
                        onChangeAno={this.props.onChangeAno}
                        onChangeTest = {this.props.onChangeTest}/>
            </div>

        );
    }
}
