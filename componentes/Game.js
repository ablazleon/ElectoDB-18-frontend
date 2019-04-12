import React from 'react';
import Content from './Content.js';
import ActionBar from './ActionBar.js';


export default class Game extends React.Component {

    render(){
        return(
            <div>
              <Content resultado={this.props.resultado}/>
              <ActionBar onChangeAno={this.props.onChangeAno}/>

            </div>

        );
    }
}
