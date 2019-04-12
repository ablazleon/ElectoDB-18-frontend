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
            <h3> Ling mola</h3>
        );

    }
};
