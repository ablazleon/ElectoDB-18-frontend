import { combineReducers } from 'redux';
import { DUAL, CAMBIA_LEY, CAMBIA_ANO, CAMBIA_REGION } from './actions';


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
            break;
        default:
            return state;
    }
}
 function currentAno(state = 0, action = {}) {
    switch(action.type) {
        case CAMBIA_ANO:
            return action.payload;
            break;
        default:
            return state;
    }
}

function currentRegion(state = 0, action = {}) {
    switch(action.type) {
        case CAMBIA_REGION:
            return action.payload;
            break;
        default:
            return state;
    }
}


function resultados(state = [], action = {}) {
            return state;
}

const GlobalState = combineReducers({
    dual,
    currentLey,
    currentAno, 
    currentRegion,
    resultados
});

export default GlobalState;
