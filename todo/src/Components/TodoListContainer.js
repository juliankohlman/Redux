import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, getTodos } from '../Actions'; // IMPORT REMOVE COMPLETEDtoggle todo

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  // using local storage to persist data
  componentDidMount() {
    const allTodos = JSON.parse(localStorage.getItem('todos'));
    if (allTodos !== null) {
      this.props.getTodos(allTodos);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.todos !== this.props.todos) {
      localStorage.setItem('todos', JSON.stringify(nextProps.todos));
    }
  }

  deleteTodo = () => {
    // console.log(this.props)
    this.props.deleteTodo()
  }

  handleToDoCompleted = todoId => {
    // console.log(this.props)
    this.props.toggleTodo(todoId);
  };


  // handleTodoInput()
  handleTodoInput = e => {
    // one handler bound to different inputs
    this.setState( {[e.target.name]: e.target.value });
  };

  addTodoHandler = e => {
    const  { text } = this.state
    const newTodo = {
      text,
      completed: false,
      id: this.props.todos ? this.props.todos.length : 0 // default
    };
    this.props.addTodo(newTodo); // pass of value to addTodo Action
    this.setState({ // reset the input
      text: ''
    });
  };

  render() {
    const { todos } = this.props
    return (
      <div>
        <form>
          <input
          // below === e.target
              onChange={this.handleTodoInput}
              name="text"
              value={this.state.text}>
              {/*// type="text">*/}
          </input>
        {/*could have another input here
          use type = button inside form so app doesn't reload
          how do you hand a click OR key press (enter)?
        */}
          <button type="button" onClick={this.addTodoHandler}> Add Todo </button>
        </form>
        <hr />
        <ul>
          {todos.map(todo => {
            {console.log(todo.id)}
            return (
              <li
                key={todo.id}
                onClick={() => this.handleToDoCompleted(todo.id)}
                style={
                  todo.completed
                    ? { color: '#d3d3d3', textDecoration: 'line-through' }
                    : null
                }
              >
                {todo.text}

              </li>

            );
          })}

        </ul>
        <button onClick={() => this.deleteTodo(todos)}>Delete Completed</button>
      {/*ADD BUTTON TO REMOVE COMPLETED HERE}*/}
      </div>
    );
  }
}

// wiring up the component to know about redux
const mapStateToProps = state => { // passes in state of app from root reducer in the store
  return {
    todos: state.todos
  };
};


{/*// anything that is currently active on state get returned as a props object
// also takes in any actions that occur on the component
// anything on (TodoList) ==> give me props (addTodo) and state
// export default connect(mapStateToProps, { addTodo })(TodoList)*/}

export default connect(mapStateToProps, { addTodo, toggleTodo, deleteTodo, getTodos })(TodoList);
