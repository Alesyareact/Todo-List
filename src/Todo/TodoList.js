import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
import './TodoList.css'
import TodoForm from './TodoForm';
import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState ([])

    const addTask = (userInput) => {
      console.log("sdf")
      if(userInput) {
        const newItem = {
          id: Math.random().toString(36).substr(2,9),
          task: userInput,
          complete: false
        }
        setTodos([...todos, newItem])
      }
  
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }
    
    return (
        <form>
            <div className='text'>TO DO</div>
            <TodoForm todos={todos} addTask={addTask}/>
            {todos.map((todo, index) => {
                return <TodoItem removetask={() => removeTask(todo.id)} todo={todo} key={todo.id} index={index} />
            }
            )}
        </form>

    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    someMethod: PropTypes.func
}

export default TodoList