// import action types
import { ADD_TODO } from '../Actions' // ../filename === index.js by default

export default (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...todos, action.payload];
    default:
      return todos;
  }
}