import React from 'react';

export default class Boton extends React.Component {

    constructor(props){
        super(props);
        //this.SelectorBoton = this.SelectorBoton.bind(this);
        this.CreadorEscenario = this.CreadorEscenario.bind(this);
    }


    //borrar esta funcion cuando la de creadorEscenario funcione
/*    SelectorBoton(bN) {
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
    }*/

    CreadorEscenario(bN){
        let ano = parseInt(bN, 10)
        let ley = this.props.leyActual;
        let region = this.props.regionActual;
        let escenarioNuevo = {"ano": ano, "region": region, "ley": ley};
        return this.props.onChangeAno(escenarioNuevo);
    }




    render(){
        return(
            <button className="Botones" onClick={()=>{this.CreadorEscenario(this.props.buttonName)}}>{this.props.buttonName}</button>
    //<button className="Botones" onClick={()=>{this.SelectorBoton(this.props.buttonName)}}>{this.props.buttonName}</button>
    //<button className="Botones" onClick={()=>{this.props.onChangeAno(parseInt(this.props.buttonName, 10))}}>{this.props.buttonName}</button>

        );
    }
}
