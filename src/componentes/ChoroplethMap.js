import React from 'react';
import Datamap from 'datamaps/dist/datamaps.world.min.js';
import * as d3 from 'd3';
import espJson from './Esp.topo.json';
class ChoroplethMap extends React.Component {

    constructor(props){
        super(props);
        this.cambiarRegionVotos = this.cambiarRegionVotos.bind(this);
    }

    componentDidMount() {
        this.drawMap();
    }

    componentDidUpdate() {
        this.drawMap();
    }

    componentWillUnmount() {
        this.clear();
    }

    clear() {
        const { container } = this.refs;
        for (const child of Array.from(container.childNodes)) {
            container.removeChild(child);
        }
        delete this.map;
    }

    cambiarRegionVotos(region){
        let ano = this.props.currentAno;
        let ley = this.props.currentLey;
        let datosAntiguo = this.props.resultados;
        let url = 'http://localhost:8080/ISST-19-rest/rest/resultados?anno='+ano+'&provincia='+region+'&leyEscano='+ley;
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(json => {
            let votosNuevos = json.votos;
            datosAntiguo.votos = votosNuevos;
            this.props.onChangeRegion(region);
            return(this.props.onChangeTest(datosAntiguo));

        })
        .catch(error =>{
            console.log(error);
        });
    }



    drawMap() {
        let cambiarRegionVotos = this.cambiarRegionVotos;
        let map = this.map;
        let dataset = {};
        // fill dataset in appropriate format
        this.props.resultados.mapa.forEach(function (item) { //

            let iso = item["provincia"],
                votos = item["votos"];
            dataset[iso] = { votosPartido: votos,
                fillColor: item["color"] };

        });

        if (!map) {
             map = this.map = new Datamap({

                element: document.getElementById('cloropleth_map'),
                scope: 'spain',
                geographyConfig: {
                    popupOnHover: true,
                    highlightOnHover: true,
                    borderColor: '#444',
                    highlightBorderWidth: 1,
                    borderWidth: 0.5,
                    dataJson: espJson,

                },
                fills: {
                    HIGH: '#afafaf',
                    LOW: '#123456',
                    MEDIUM: 'blue',
                    UNKNOWN: 'rgb(0,0,0)',
                    defaultFill: '#eee'
                },
                data: dataset,
                setProjection: function (element) {
                    let projection = d3.geoMercator()
                        .center([3.70325, 40.4167]) // always in [East Latitude, North Longitude]
                        .scale(1000)
                        .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

                    let path = d3.geoPath().projection(projection);
                    return { path: path, projection: projection };
                },
                done: function(datamap) {
                    datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
                        cambiarRegionVotos(geography.id);
                    });
                }
            });

        } else {
            for(let i = 0; i < 52; i++){
                let data = {};
                let provincia = this.props.resultados.mapa[i]["provincia"];
                data[provincia] = this.props.resultados.mapa[i]["color"];
                map.updateChoropleth(data, {reset: false});
            }
            //map.updateChoropleth({"Madrid": this.props.test["mapa"][1]["color"]}, {reset: false});
            /*map.updateChoropleth({Madrid: this.props.resultadosAno[0]["color"]}, {reset: false});
            map.updateChoropleth({Murcia: this.props.resultadosAno[1]["color"]}, {reset: false});
            map.updateChoropleth({Asturias: this.props.resultadosAno[2]["color"]}, {reset: false});*/
        }
    }


    resizeMap() {
        this.map.resize();
    }

    render() {

       // console.log(this.props.resultadosAno);
        return (
            <div id="cloropleth_map" style={{height: "100%",width: "100%"}}></div>
        );
    }
}

export default ChoroplethMap;
