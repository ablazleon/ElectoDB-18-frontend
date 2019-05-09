export const DUAL = 'DUAL';
export const CAMBIA_LEY = 'CAMBIA_LEY';
export const CAMBIA_ANO = 'CAMBIA_ANO';
export const CAMBIA_REGION = 'CAMBIA_REGION';
export const CAMBIA_TEST = 'CAMBIA_TEST';



export function dual(tipo){
    return {type: DUAL, payload: tipo};
}

export function cambiaLey(escenarioNuevo){
    return {type: CAMBIA_LEY, payload: escenarioNuevo};
}

export function cambiaAno(escenarioNuevo){
    return {type: CAMBIA_ANO, payload: escenarioNuevo};
}

export function cambiaRegion(escenarioNuevo){
    return {type: CAMBIA_REGION, payload: escenarioNuevo};
}

export function cambiaTest(escenarioInicial){
    return {type: CAMBIA_TEST, payload: escenarioInicial};
}

