import React from 'react';
import Datamap from 'datamaps/dist/datamaps.world.min.js';
import * as d3 from 'd3';
import espJson from './Esp.topo.json';
class ChoroplethMap extends React.Component {

    constructor(props){
        super(props);
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

    drawMap() {

        let map = this.map;
        let dataset = {};
        let onChangeRegion = this.props.onChangeRegion
        // fill dataset in appropriate format
        this.props.resultadosAno.forEach(function (item) { //

            let iso = item["id"],
                PP = item["PP"][0],
                PSOE = item["PSOE"][0],
                Podemos = item["Podemos"][0],
                Ciu = item["CiU"][0];
            dataset[iso] = { votosPP: PP,votosPSOE: PSOE,votosPodemos: Podemos,votosCiu:Ciu,
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
                        //alert(geography.id);
                        onChangeRegion(1);
                        /*var state_id = geography.id;
                        var fillkey_obj = datamap.options.data[state_id] || {fillKey: 'defaultFill'};
                        var fillkey = fillkey_obj.fillKey;;
                        var fillkeys = Object.keys(fills);
                        var antikey = fillkeys[Math.abs(fillkeys.indexOf(fillkey) - 1)];
                        var new_fills = {
                          [geography.id] : {
                            fillKey: antikey
                          }
                        };
                        datamap.updateChoropleth(new_fills);*/
                    });
                }
            });

        } else {

            map.updateChoropleth({Madrid: this.props.resultadosAno[0]["color"]}, {reset: false});
            map.updateChoropleth({Murcia: this.props.resultadosAno[1]["color"]}, {reset: false});
            map.updateChoropleth({Asturias: this.props.resultadosAno[2]["color"]}, {reset: false});
        }
    }


    resizeMap() {
        this.map.resize();
    }

    render() {

       // console.log(this.props.resultadosAno);
        return (
            <div id="cloropleth_map" style={{
                height: "150%",
                width: "150%",
            }}></div>
        );
    }
}

export default ChoroplethMap;
