import { LOADING_DATA, FAILURE_DATA, SUCCESS_DATA } from "./actionTypes";
import axios from "axios";


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


export const fetchData = () => {
    return async (dispatch) => {
        dispatch(loadingData())
        try {
            const res = await axios.get('https://dummyjson.com/products')
            const data = res.data;
            dispatch(successData(data))
        } catch (error) {
            dispatch(failuresData(error.message))
        }
    }
}