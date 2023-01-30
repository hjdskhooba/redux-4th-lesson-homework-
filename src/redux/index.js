import {createStore, compose, } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux'
import rootReducers from './reducers/index';

const initialState = {}


const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
const composeEnhances = composeFunc(applyMiddleware(thunk))


const store = createStore(rootReducers(), initialState, composeEnhances);

export default store;