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

	
    render(){
        return(
	<Chart
          chartType="PieChart"
          data={[ ['Pac Man', 'Percentage'],
          ['PP', 55],
          ['PSOE', 25],
          ['CIUDADANOS', 10],
          ['UNIDAS PODEMOS', 5],
          ['VOX', 5],

          ['', 100]]}
          options={pieOptions}
          graph_id="PieChart"
          width={"100%"}
          height={"400px"}
          legend_toggle
        />
        );

    }
};
