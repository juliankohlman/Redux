import { combineReducers } from 'redux';
import todosReducer from './todos.js';
// Take in state, return it to the store

const rootReducer = combineReducers({
  todos: todosReducer,
})

export default rootReducer