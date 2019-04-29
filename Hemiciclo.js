import React from 'react';
import { Chart } from 'react-google-charts';

const pieOptions = {
  	  pieHole: 0.4,
          tooltip: {text: 'value'},
          title: 'Resultados Electorales',
          legend: 'none',
          width: 500,
          pieSliceText: 'none',
          pieStartAngle: 270,
          slices: {
		    0: { color: '#3366CC' },
		    1: { color: 'red'},
		    2: { color: 'orange'},
		    3: { color: 'purple'},
		    4: { color: 'green'},
		    5: { color: 'white'}
		  }
	};

export default class Hemiciclo extends React.Component {
resultado;

    render(){

        return(

	<Chart
          chartType="PieChart"
          data={[ ['Pac Man', 'Percentage'],
          ['PP', this.props.resultado["PP"][1]],
          ['PSOE', this.props.resultado["PSOE"][1]],
          ['CIUDADANOS', this.props.resultado["CiU"][1]],
          ['UNIDAS PODEMOS', this.props.resultado["Podemos"][1]],
          ['VOX', 0],

          ['', (this.props.resultado["PP"][1]+this.props.resultado["PSOE"][1]+this.props.resultado["CiU"][1]+this.props.resultado["Podemos"][1])]
        ]}
          options={pieOptions}
          graph_id="PieChart"
          width={"100%"}
          height={"600px"}
          legend_toggle
        />
        );

    }
};
