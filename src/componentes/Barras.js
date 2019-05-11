import React from 'react';
import { Chart } from 'react-google-charts';
//import { Chart } from '../App';

const barOptions = {
        title: "Votos acumulados",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };

export default class Barras extends React.Component {

    constructor(props){
      super(props);
      //this.Selecta = this.Selecta.bind(this);
      this.datosBarras = this.datosBarras.bind(this);
    }

    datosBarras(){
      let resultados = this.props.resultados;
      let datos = [["Element", "Density", { role: "style" } ]];
      resultados.votos.forEach( (jsonito)=>{
          //console.log(JSON.stringify(jsonito));
          datos.push([jsonito.partido, jsonito.votos, jsonito.color]);
      });
      return datos;
    }

    render(){
        
        return(


	<Chart

          chartType="BarChart"
          data={this.datosBarras()}
          /*data={[ ["Element", "Density", { role: "style" } ],
              ['PP', partido[0]["votos"], "blue"],
              ['PSOE', partido["votos"], "red"],
              ['CIU', partido["votos"], "orange"],
              ['Podemos', partido["votos"], "purple"],
              ['VOX', this.partido["votos"], "yellow"]
          ]}*/
          options={barOptions}
          graph_id="BarChart"
          width= {"100%"}
          height= {"400px"}


        />
        );

    }
};
