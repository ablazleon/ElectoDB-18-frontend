import React from 'react';
import { Chart } from 'react-google-charts';

export default class Hemiciclo extends React.Component {
    constructor(props){
        super(props);
        this.datosHemiclico = this.datosHemiclico.bind(this);
    }

    datosHemiclico(){
      let resultados = this.props.resultados;
      // variable con los escaños de cada partido
      let datos = [['Pac Man', 'Percentage']];
      let suma = 0;
      //console.log("Hemiciclo-----------------------------------------------"+JSON.stringify(this.props.resultados.votos));
      resultados.votos.forEach( (jsonito)=>{
          suma += jsonito.escanos;
          datos.push([jsonito.partido, jsonito.escanos]);
      });
      datos.push(['', suma]);

      // variable con el color de cada partido
      let colors = {}
      for(let i = 0; i < this.props.resultados.votos.length; i++) {
        colors[i] = {color: this.props.resultados.votos[i].color};
      }
      colors[this.props.resultados.votos.length] = {color: "white"};

      let pieOptions = {
        pieHole: 0.4,
            tooltip: {text: 'value'},
            title: 'Resultados Electorales',
            legend: 'none',
            width: 500,
            pieSliceText: 'none',
            pieStartAngle: 270,
            slices: colors
      };

      return {"datos": datos, "options": pieOptions}
    }

    render(){
        
        return(

	       <Chart
          chartType="PieChart"
          data={this.datosHemiclico().datos}
          options={this.datosHemiclico().options}
          graph_id="PieChart"
          width={"100%"}
          height={"600px"}
          legend_toggle
          />
        );

    }
};
