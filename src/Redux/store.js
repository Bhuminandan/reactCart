import { createStore, combineReducers, applyMiddleware } from 'redux'
import cartReducer from './reducers/cartReducers'
import { fetchReducer } from './reducers/fetchReducer';
import thunk from 'redux-thunk';

const combinedReducer = combineReducers({
    fetchReducer: fetchReducer,
    cartReducer: cartReducer
})

const store = createStore(combinedReducer, applyMiddleware(thunk));

export default store;