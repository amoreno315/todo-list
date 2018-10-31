import React, { Component } from 'react'

class Todo extends Component {
 
  render() {
    const { todo, index, onDelete, onCheck } = this.props;

    return (
      <li className={todo.done ? 'is-done' : ''}>
        {todo.name}
        <input 
          type="checkbox" 
          checked={todo.done} 
          onChange={() => {onCheck(index)} }
        />
        <button onClick={() => {onDelete(index)}}>delete</button>
      </li>
    )
  }
}

export default Todo;