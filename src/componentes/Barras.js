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
    resultado;


    render(){
        return(

	<Chart
          chartType="BarChart"
          data={[ ["Element", "Density", { role: "style" } ],
          ['PP', this.props.resultado["PP"][0], "blue"],
          ['PSOE', this.props.resultado["PSOE"][0], "red"],
          ['CIUDADANOS', this.props.resultado["CiU"][0], "orange"],
          ['UNIDAS PODEMOS', this.props.resultado["Podemos"][0], "purple"]
          ]}
          options={barOptions}
          graph_id="BarChart"
          width= {"100%"}
          height= {"400px"}

        />
        );

    }
};
