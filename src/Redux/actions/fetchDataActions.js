import { LOADING_DATA, FAILURE_DATA, SUCCESS_DATA } from "./actionTypes";


export const loadingData = () => {
    return {
        type: LOADING_DATA
    }
}

export const successData = (data) => {
    return {
        type: SUCCESS_DATA,
        payload: data
    }
}


export const failuresData = (data) => {
    return {
        type: FAILURE_DATA,
        payload: data
    }
}