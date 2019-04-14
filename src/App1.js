import React, { Component } from 'react';
import './App.css';
import provincia from './components/Esp.topo';

import ChoroplethMap from './components/ChoroplethMap';

class App extends Component {



    state = {
        data: [
            ["Álava", 75,54,34], ["Albacete", 23,46,43], ["Alicante", 66,78,50], ["Almería",12,54,88], ["Asturias", 12,87,21],
            ["Ávila", 43,23,98], ["Badajoz", 78,56,21], ["Baleares", 76,89,19], ["Barcelona", 21,46,60],["Bizkaia", 34,87,19], ["Burgos", 45,4,87],
            ["Cáceres", 54,87,44],["Cádiz", 45,76,43], ["Cantabria",76,90, 50], ["Castellón", 23,56,88], ["Ceuta", 67,89,21],
            ["Ciudad Real", 54,87,44], ["Córdoba", 54,87,44], ["Cuenca", 54,87,44], ["Gerona", 54,87,44], ["Granada", 54,87,44],
            ["Guadalajara", 54,87,44],["Gipuzkoa", 43,56,87], ["Huelva", 54,87,44], ["Huesca", 54,87,44],
            ["Jaén", 78,95,43], ["La Coruña", 67,87,33], ["La Rioja", 56,78,19], ["Las Palmas", 76,78,60], ["León", 78,90,67],["Lérida", 54,87,44],
            ["Lugo", 23,56,19], ["Madrid", 56,78,60], ["Málaga", 23,67,67],["Melilla", 23,78,21],["Murcia", 67,43,19],
            ["Navarra", 45,67,60], ["Orense", 23,45,67],["Palencia", 78,45,21],
            ["Pontevedra", 76,87,19], ["Salamanca", 67,88,60], ["Santa Cruz de Tenerife", 34,56,67],["Segovia",34,55, 21],
            ["Sevilla", 87,94,19], ["Soria",56,89, 60],
            ["Tarragona",23,56, 19], ["Teruel", 23,56,60], ["Toledo",24,56, 67],["Valencia", 12,34,21],["Valladolid", 56,34,19],
            ["Zamora", 65,78,60], ["Zaragoza", 65,78,67]],
    }
/*  state = {
    data: [
      ["Álava", 75,54,34], ["Albacete", 23,46,43], ["Alicante", 66,78,50], ["Almería",12,54,88], ["Asturias", 12,87,21],
      ["Ávila", 43,23,98], ["Badajoz", 78,56,21], ["Baleares", 76,89,19], ["Barcelona", 21,46,60],["Bizkaia", 34,87,19], ["Burgos", 45,4,87],
      ["Cáceres", 54,87,44],["Cádiz", 45,76,43], ["Cantabria",76,90, 50], ["Castellón", 23,56,88], ["Ceuta", 67,89,21],
      ["Ciudad Real", 54,87,44], ["Córdoba", 54,87,44], ["Cuenca", 54,87,44], ["Gerona", 54,87,44], ["Granada", 54,87,44],
      ["Guadalajara", 54,87,44],["Gipuzkoa", 43,56,87], ["Huelva", 54,87,44], ["Huesca", 54,87,44],
      ["Jaén", 78,95,43], ["La Coruña", 67,87,33], ["La Rioja", 56,78,19], ["Las Palmas", 76,78,60], ["León", 78,90,67],["Lérida", 54,87,44],
        ["Lugo", 23,56,19], ["Madrid", 56,78,60], ["Málaga", 23,67,67],["Melilla", 23,78,21],["Murcia", 67,43,19],
        ["Navarra", 45,67,60], ["Orense", 23,45,67],["Palencia", 78,45,21],
        ["Pontevedra", 76,87,19], ["Salamanca", 67,88,60], ["Santa Cruz de Tenerife", 34,56,67],["Segovia",34,55, 21],
        ["Sevilla", 87,94,19], ["Soria",56,89, 60],
        ["Tarragona",23,56, 19], ["Teruel", 23,56,60], ["Toledo",24,56, 67],["Valencia", 12,34,21],["Valladolid", 56,34,19],
        ["Zamora", 65,78,60], ["Zaragoza", 65,78,67]],
  }*/




  render() {
    return (
  <div>
  <div>
      <center> <h1>ElectoDB</h1>

      Una herramienta fácil de usar para analizar visualmente resultados electorales.

      <ul> Elecciones a cortes generales en España. </ul>
      </center>
  </div>
      <div style={{
        position: "relative",
        height:"80vh",
        width: "90vw"
      }}>
        <ChoroplethMap data={this.state.data}/>
      </div>

      </div>
    );
  }
}

export default App;
