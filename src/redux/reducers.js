import { combineReducers } from 'redux';
import { DUAL, CAMBIA_LEY, CAMBIA_ANO, CAMBIA_REGION, CAMBIA_TEST,CAMBIA_PARTIDO} from './actions';
import { resultados1, resultados2 } from "../assets/mock-data"




function dual(state = false, action = {}) {
    switch(action.type) {
        case DUAL:
	    return action.payload;
	default:
	    return false;
    }
}

function currentLey(state = 0, action = {}) {
    switch(action.type) {
        case CAMBIA_LEY:
            return action.payload.ley;
        default:
            return state;
    }
}
 function currentAno(state = 0, action = {}) {
    switch(action.type) {
        case CAMBIA_ANO:
            return action.payload.ano;
        default:
            return state;
    }
}

function currentRegion(state = 0, action = {}) {
    switch(action.type) {
        case CAMBIA_REGION:
            return action.payload.region;
        default:
            return state;
    }
}


function resultados(state = {}, action = {}) {
  switch(action.type) {
      case CAMBIA_LEY:
      case CAMBIA_REGION:
      case CAMBIA_ANO:
          let ano = action.payload.ano;
          let ley = action.payload.ley;
          let region = action.payload.region;
          let url = `http://localhost:8080/ISST-19-rest/rest/resultados?ano=${ano}&provincia=${region}&leyEscano=${ley}`;
          fetch(url)
              .then(res => {
                  return res.json();
              })
              .catch(error =>{
                  console.log(error);
                  return state;
              });
          break;
      case CAMBIA_TEST:
          console.log(JSON.stringify(action.payload));
          return JSON.parse(action.payload);
      default:
          return state;
  }
}

/*function test(state = "Estado defecto después de ejecutar", action = {}) {
  switch(action.type) {
      case CAMBIA_TEST:
          return action.payload;
      default:
          return state;
  }
}*/



const GlobalState = combineReducers({
    dual,
    currentLey,
    currentAno,
    currentRegion,
    resultados,
   // test
});

export default GlobalState;
