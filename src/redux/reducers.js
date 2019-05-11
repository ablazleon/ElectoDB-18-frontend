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
            return action.payload.ley;
        default:
            return state;
    }
}
 function currentAno(state = 2016, action = {}) {
    switch(action.type) {
        case CAMBIA_ANO:
            return action.payload;
        default:
            return state;
    }
}

function currentRegion(state = "Madrid", action = {}) {
    switch(action.type) {
        case CAMBIA_REGION:
            return action.payload;
        default:
            return state;
    }
}


function resultados(state = {}, action = {}) {
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
    resultados
});

export default GlobalState;
