import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../styles/App.css';
import TodoListContainer from './TodoListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Julian's Todo List</h1>
        <TodoListContainer />
      </div>
    )
  }
}

export default App;
