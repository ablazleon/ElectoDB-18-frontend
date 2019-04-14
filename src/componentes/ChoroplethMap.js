import React, { Component } from 'react';
import Datamap from 'datamaps/dist/datamaps.world.min.js';
import d3 from 'd3';
import espJson from './Esp.topo.json';

class ChoroplethMap extends Component {
    componentDidMount() {
        // Datamaps expect data in format:
        // { "USA": { "fillColor": "#42a844", numberOfWhatever: 75},
        //   "FRA": { "fillColor": "#8dc386", numberOfWhatever: 43 } }
        let dataset = {};

     /*   let voteArray = ["votesPP","votesPSOE","votesPodemos"];
        espJson.objects.spain.geometries.properties.forEach(function(elem){
            elem.vot = voteArray[Math.floor(Math.random()*voteArray.length)];
        })*/



        //Colorize function for each province depending in votes numbers

         let colorize = (valuePP,valuePSOE,valuePodemos) => {
             let max = Math.max(valuePP,valuePSOE,valuePodemos);
            if(valuePP === max)
                 return "#02c9ec";

             if(valuePSOE === max)
                 return "#ec0209";

             if(valuePodemos === max)
                 return "#8f04d5";

         }

        // fill dataset in appropriate format
        this.props.data.forEach(function (item) { //
            // item example value ["USA", 70]
            let iso = item[0],
                PP = item[1],
                PSOE = item[2],
                Podemos = item[3];
            dataset[iso] = { votosPP: PP,votosPSOE: PSOE,votosPodemos: Podemos,
                fillColor: colorize(PP,PSOE,Podemos) };
        });

        let map = new Datamap({
            element: document.getElementById('cloropleth_map'),
            scope: 'spain',
            geographyConfig: {
                popupOnHover: true,
                highlightOnHover: true,
                borderColor: '#444',
                highlightBorderWidth: 1,
                borderWidth: 0.5,
                dataJson: espJson,
                popupTemplate: function (geo, data) {
                    // don't show tooltip if country don't present in dataset
                    if (!data) { return; }
                    // tooltip content
                    return ['<div class="hoverinfo">',
                        '<strong>', geo.properties.name, '</strong>',
                        '<br>Votos PP: <strong>', data.votosPP, '</strong>',
                        '<br>Votos PSOE: <strong>', data.votosPSOE, '</strong>',
                        '<br>Votos Podemos: <strong>', data.votosPodemos, '</strong>',
                        '</div>'].join('');
                }
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
                var projection = d3.geo.mercator()
                    .center([3.70325, 40.4167]) // always in [East Latitude, North Longitude]
                    .scale(1000)
                    .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

                var path = d3.geo.path().projection(projection);
                return { path: path, projection: projection };
            }
        });
    }
    render() {
        return (
            <div id="cloropleth_map" style={{
                height: "100%",
                width: "100%",
            }}></div>
        );
    }
}

export default ChoroplethMap;