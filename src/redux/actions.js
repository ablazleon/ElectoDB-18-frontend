
export const DUAL = 'DUAL';
export const CAMBIA_LEY = 'CAMBIA_LEY';
export const CAMBIA_ANO = 'CAMBIA_ANO';
export const CAMBIA_REGION = 'CAMBIA_REGION';


export function dual(tipo){
    return {type: DUAL, payload: tipo};
}

export function cambiaLey(id){
    return {type: CAMBIA_LEY, payload: id};
}

export function cambiaAno(buttonName){
    return {type: CAMBIA_ANO, payload: buttonName};
}

export function cambiaRegion(id){
    return {type: CAMBIA_REGION, payload: id};
}



