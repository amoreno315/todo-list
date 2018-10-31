import React, { Component } from 'react';
import Form from './components/Form'
import Todo from './components/Todo'
import Switch from './components/Switch';

class App extends Component {

  state = {
    todos: [{name: 'Learn ReactJS', done: false}],
    isVisible: true
  }

  handleSubmit = (value) => {
    const { todos } = this.state;
    todos.push({ name: value, done: false })
    this.setState({
      todos: todos
    })
  }

  handleDelete = (index) => {
    const { todos } = this.state;
    todos.splice(index, 1);
    this.setState({
      todos: todos,
    })
  }

  handleCheckbox = (index) => {
    const { todos } = this.state;
    todos[index].done = !todos[index].done
    this.setState({
      todos: todos,
    })
  }

  renderSomething = () => {
    return <h3>render something</h3>
  }

  render() {
    const { todos, isVisible } = this.state;
    const result = isVisible || 'hola';
    return (
      <div className="App">
        {isVisible ? <h1>Todo App</h1> : this.renderSomething()}
        {isVisible && this.renderSomething()}
        <Switch value={isVisible ? 'loading' : 'loaded'}/>
        <Form onSubmit={this.handleSubmit} />
        <ul>
          { todos.map((todo, index) => {
            return <Todo 
              todo={todo} 
              key={index}
              index={index}
              onDelete={this.handleDelete} 
              onCheck={this.handleCheckbox}
            />
          })}
        </ul>
      </div>
    );
  }
}

export default App;
