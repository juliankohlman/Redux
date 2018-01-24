// action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const GET_TODOS = 'GET_TODOS';
// export your remove action;

// action creators
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id
  }
}

// create remove action creator
export const deleteTodo = () => {
  return {
    type: DELETE_TODO,
  }
}

export const getTodos = (todos) => {
  return {
    type: GET_TODOS,
    payload: todos
  }
}