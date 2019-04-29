import React from 'react';

export default class Boton extends React.Component {

    constructor(props){
        super(props);
        this.SelectorBoton = this.SelectorBoton.bind(this);
    }

    SelectorBoton(bN) {
        switch(bN){
            case "2019":
                return this.props.onChangeAno(0);
            case "2016":
               return this.props.onChangeAno(1);
            case "2015":
               return this.props.onChangeAno(2);
            case "2011":
               return this.props.onChangeAno(3);
            default:
              return this.props.onChangeAno(4);
        }
    }


    render(){
        return(
    <button className="Botones" onClick={()=>{this.SelectorBoton(this.props.buttonName)}}>{this.props.buttonName}</button>


        );
    }
}
