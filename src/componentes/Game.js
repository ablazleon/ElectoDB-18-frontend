import React from 'react';
import Content from './Content.js';
import ActionBar from './ActionBar.js';
import Test from './test.js';


export default class Game extends React.Component {

    render(){
        return(
            <div>
            <h1>ElectoDB</h1>
            <ActionBar onChangeAno={this.props.onChangeAno} onChangeLey={this.props.onChangeLey}/>
            <Content resultadosAno={this.props.resultadosAno} resultado={this.props.resultado} onChangeRegion={this.props.onChangeRegion}/>
            <Test test={this.props.test} onChangeTest={this.props.onChangeTest}/>
            </div>

        );
    }
}
