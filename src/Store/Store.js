import { applyMiddleware } from "redux";
import {createStore} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import Combine from "./Reducer/Combine";
// import FavoriteReducer from './Reducer/FavoriteReducer'
// import CompineReducers from "./ruducers/CompineReducers";

// const store = createStore(FavoriteReducer)
const store = createStore(Combine, 
    composeWithDevTools(applyMiddleware(thunk)))

export default store;