import {combineReducers} from 'redux';
import mathOperation from './operation';
import todoReducer from './Todos'

const rootReducer=combineReducers({
    mathOperation,todoReducer
})

export default rootReducer;