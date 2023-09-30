import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../actions/actionTypes";


const initialState = []

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            const isProductExists = state.some((product) => product.id === action.payload.id)

            if (isProductExists) {
                return state;
            } else {

                return [...state, { ...action.payload, cart: true }]
            }


        case REMOVE_FROM_CART:
            return state.filter((obj) => obj.id !== action.payload)

        case CLEAR_CART:
            return initialState;

        default:
            return state;
    }

}




export default cartReducer;