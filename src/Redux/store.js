import { createStore, combineReducers } from 'redux'
import cartReducer from './reducers/cartReducers'
import { fetchReducer } from './reducers/fetchReducer';


const combinedReducer = combineReducers({
    fetchReducer: fetchReducer,
    cartReducer: cartReducer
})

const store = createStore(combinedReducer);

export default store;