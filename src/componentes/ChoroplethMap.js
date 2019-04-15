import React, { Component } from 'react';
import Chart from "react-google-charts";

constructor(props){
    super(props);
    this.Maximo = this.Maximo.bind(this);
}

Maximo() {
    switch(resultados){
      resultados.forEach((element, i)=>{
        if elem
      })
    }
}



class ChoroplethMap extends Component {



    render() {
      var data = [
        ["Provinces", "Latitude"],
        [{v: 'ES-MD', f: 'Madrid'}, this.Maximo(this.props.resultadosAno[0])],
        [{v: 'ES-CT', f: 'Cataluña'}, 2],



  ];


        return (
          <div className="App">
                  <Chart chartType="GeoChart" width="100%" height="400px"  options={{ region : 'ES', resolution : 'provinces', colorAxis: {colors: ['blue', 'orange', 'red','purple']}}} data={data}

/>
          </div>
        );
    }
}

export default ChoroplethMap;
