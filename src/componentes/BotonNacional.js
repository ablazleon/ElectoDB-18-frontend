import React from 'react';

export default class BotonNacional extends React.Component {

    constructor(props){
        super(props);
        //this.SelectorBoton = this.SelectorBoton.bind(this);
        this.volverNacional = this.volverNacional.bind(this);
    }

    volverNacional(){
        let ley = this.props.currentLey;
        let region = "Nacional";
        let ano = this.props.currentAno;
        let url = 'http://localhost:8080/ISST-19-rest/rest/resultados?anno='+ano+'&provincia='+region+'&leyEscanos='+ley;
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(json => {
            this.props.onChangeRegion(region);
            return(this.props.onChangeTest(json));

        })
        .catch(error =>{
            console.log(error);
        });
    }


    render(){
        return(
            <button onClick={()=>{this.volverNacional()}}>Datos Nacionales</button>
        );
    }
}