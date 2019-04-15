import React, { Component } from 'react';
import Chart from "react-google-charts";

/* constructor(props){
    super(props);
    this.Colorize = this.Maximo.bind(this);
}

let Colorize = () => {
  let max = Math.max(this.props.resultadosAno[0],valuePSOE,valuePodemos);
 if(valuePP === max)
      return "#02c9ec";

  if(valuePSOE === max)
      return "#ec0209";

  if(valuePodemos === max)
      return "#8f04d5";

} */




class ChoroplethMap extends Component {



    render() {
      var data = [
        ["Provinces", " "],
        [{v: 'ES-MD', f: 'Madrid'}, this.props.resultadosAno[0]["color"]],
        [{v: 'ES-CT', f: 'Cataluña'}, this.props.resultadosAno[1]["color"]],
        [{v: 'ES-RI', f: 'Rioja'}, this.props.resultadosAno[2]["color"]],
        [{v: 'ES-AR', f: 'Aragon'}, this.props.resultadosAno[3]["resto"][0]],
        [{v: 'ES-CB', f: 'Cantabria'}, this.props.resultadosAno[3]["resto"][1]],
        [{v: 'ES-CM', f: 'Castilla La Mancha'}, this.props.resultadosAno[3]["resto"][2]],
        [{v: 'ES-CL', f: 'Castilla Y Leon'}, this.props.resultadosAno[3]["resto"][3]],
        [{v: 'ES-GA', f: 'Galicia'}, this.props.resultadosAno[3]["resto"][4]],
        [{v: 'ES-MC', f: 'Murcia'}, this.props.resultadosAno[3]["resto"][5]],
        [{v: 'ES-NC', f: 'Navarra'}, this.props.resultadosAno[3]["resto"][6]],
        [{v: 'ES-VC', f: 'Valencia'}, this.props.resultadosAno[3]["resto"][7]],
        [{v: 'ES-EX', f: 'Extremadura'}, this.props.resultadosAno[3]["resto"][8]],
        [{v: 'ES-AS', f: 'Asturias'}, this.props.resultadosAno[3]["resto"][9]],
        [{v: 'ES-AN', f: 'Andalucía'}, this.props.resultadosAno[3]["resto"][10]],
        [{v: 'ES-PV', f: 'País Vasco'}, this.props.resultadosAno[3]["resto"][11]],
        [{v: 'ES-IB', f: 'Islas Baleares'}, this.props.resultadosAno[3]["resto"][12]],
        [{v: 'ES-CN', f: 'Canarias'}, this.props.resultadosAno[3]["resto"][13]]



  ];


        return (
          <div className="App">
            <Chart chartType="GeoChart" width="100%" height="400px"  options={{ region : 'ES', resolution : 'provinces', colorAxis: {colors: ['blue', 'orange', 'red','purple']}}} data={data}/>
          </div>
        );
    }
}

export default ChoroplethMap;
