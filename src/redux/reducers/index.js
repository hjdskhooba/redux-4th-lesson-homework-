import { combineReducers } from 'redux';
import todos from './todos';

const rootReducer = (initialState) => combineReducers({
    todos
})

export default rootReducer