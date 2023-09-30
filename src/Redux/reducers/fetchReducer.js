import { SUCCESS_DATA, LOADING_DATA, FAILURE_DATA } from '../actions/actionTypes';

const initialState = {
    loading: false,
    error: '',
    data: []
};

export const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            };
        case SUCCESS_DATA:
            return {
                ...state,
                loading: false,
                data: action.payload
            };

        case FAILURE_DATA:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}