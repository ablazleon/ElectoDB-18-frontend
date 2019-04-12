import React from 'react';
export default class Respuesta extends React.Component {
    render(){
        return(
            <div>
            <input className="Entrada" type="text" value={this.props.question.userAnswer || ''} onChange={(evento)=>{this.props.onQuestionAnswer(evento.target.value);}}/>
            </div>
        );

    }
}
