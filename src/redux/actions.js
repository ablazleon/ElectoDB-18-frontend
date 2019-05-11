export const DUAL = 'DUAL';
export const CAMBIA_LEY = 'CAMBIA_LEY';
export const CAMBIA_ANO = 'CAMBIA_ANO';
export const CAMBIA_REGION = 'CAMBIA_REGION';
export const CAMBIA_TEST = 'CAMBIA_TEST';



export function dual(tipo){
    return {type: DUAL, payload: tipo};
}

export function cambiaLey(leyNueva){
    return {type: CAMBIA_LEY, payload: leyNueva};
}

export function cambiaAno(anoNuevo){
    return {type: CAMBIA_ANO, payload: anoNuevo};
}

export function cambiaRegion(region){
    return {type: CAMBIA_REGION, payload: region};
}

export function cambiaTest(resultadosNuevos){
    return {type: CAMBIA_TEST, payload: resultadosNuevos};
}

