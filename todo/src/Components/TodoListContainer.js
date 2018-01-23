import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../Actions';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

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

  // TOGGLE TODO

  render() {
    return (
      <div>
        <form action="">
          <input
          // below === e.target
              onChange={this.handleTodoInput}
              name="text"
              value={this.state.text}
              type="text">
          </input>
        {/*could have another input here
          use type = button inside form so app doesn't reload
          how do you hand a click OR key press (enter)?
        */}
        <button type="button" onClick={this.addTodoHandler}> Add Todo </button>
        </form>
        {this.props.todos.map(todo => {
          return <li key={todo.id}>{todo.text}</li>
        })}
      </div>
    );
  }
}

// wiring up the component to know about redux
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo })(TodoList)
