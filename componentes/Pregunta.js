import React from 'react';
export default class Pregunta extends React.Component {
    render(){
        return(
 <div>
               <h2 className="Titulo2">{this.props.question.question}</h2>
               {this.props.question.tips.map((tip,index)=>{
                 return <h2 key={index}>{tip}</h2>}
               )}

</div>
        );
    }
}
