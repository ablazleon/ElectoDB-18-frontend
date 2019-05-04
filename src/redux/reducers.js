import { combineReducers } from 'redux';
import { DUAL, CAMBIA_LEY, CAMBIA_ANO, CAMBIA_REGION, CAMBIA_TEST} from './actions';
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
            return action.payload;
        default:
            return state;
    }
}
 function currentAno(state = 0, action = {}) {
    switch(action.type) {
        case CAMBIA_ANO:
            return action.payload;
        default:
            return state;
    }
}

function currentRegion(state = 0, action = {}) {
    switch(action.type) {
        case CAMBIA_REGION:
            return action.payload;
        default:
            return state;
    }
}


function resultados(state = [], action = {}) {
  switch(action.type) {
      case CAMBIA_LEY:
          if (action.payload===0)
            return [...resultados1];
          if (action.payload===1)
            return [...resultados2];
          break;
      case CAMBIA_REGION:

      default:
          return state;
  }
}

function test(state = "Estado defecto después de ejecutar", action = {}) {
  switch(action.type) {
      case CAMBIA_TEST:
          return action.payload;
      default:
          return state;
  }
}

const GlobalState = combineReducers({
    dual,
    currentLey,
    currentAno,
    currentRegion,
    resultados,
    test
});

export default GlobalState;
