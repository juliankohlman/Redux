// import action types
// export remove COMPLETED TODO'S
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, GET_TODOS } from '../Actions' // ../filename === index.js by default

export default (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...todos, action.payload];
    case TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload) {
          return Object.assign({}, todo, { completed: !todo.completed });
        }
        return todo;
      });
    case DELETE_TODO:
      return todos.filter(todo => !todo.completed)
    // remove todo REDUCER
    case GET_TODOS:
      return action.payload;
    default:
      return todos;
  }
}