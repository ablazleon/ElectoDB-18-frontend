import React from 'react';
import Boton from './Boton.js'
import Selector from './Selector.js'
import Content from "./Content";
export default class ActionBar extends React.Component {
    render(){

        return(
            <div className="ActionBar">
               {/* <Boton buttonName="Submit" questions={this.props.questions} finished={this.props.finished} onSubmit={this.props.onSubmit} indexQuestion={this.props.indexQuestion}/>
               <Boton buttonName="Anterior" question={this.props.question} finished={this.props.finished} onChangeQuestion={this.props.onChangeQuestion}indexQuestion={this.props.indexQuestion}/>
               <Boton buttonName="Siguiente" question={this.props.question} finished={this.props.finished} onChangeQuestion={this.props.onChangeQuestion}indexQuestion={this.props.indexQuestion}/> */}

		<Boton buttonName="2019"
               onChangeAno={this.props.onChangeAno}
               regionActual={this.props.regionActual}
               leyActual={this.props.leyActual}
        />
		<Boton buttonName="2016"
               onChangeAno={this.props.onChangeAno}
               regionActual={this.props.regionActual}
               leyActual={this.props.leyActual}
        />

		<Boton buttonName="2015"
               onChangeAno={this.props.onChangeAno}
               regionActual={this.props.regionActual}
               leyActual={this.props.leyActual}
        />
		<Boton buttonName="2011"
               onChangeAno={this.props.onChangeAno}
               regionActual={this.props.regionActual}
               leyActual={this.props.leyActual}
        />
        <Selector onChangeLey={this.props.onChangeLey}
              regionActual={this.props.regionActual}
              anoActual={this.props.anoActual}
        />
            </div>
        );
    }
}
