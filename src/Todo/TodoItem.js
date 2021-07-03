import React from 'react'
import PropTypes from 'prop-types'
import './TodoItem.css'


function TodoItem({ todo, index, toggleTask, removeTask }) 
{ 
    return (
        <div>
            <div className={todo.complete ? "item-text strike" : "item-text"} onClick={() => toggleTask(todo.id)}></div>
            <li className='yourTask'><strong>{index + 1}</strong>  &nbsp; {todo.task} 
                <button onClick={removeTask(todo.id)}> Удалить </button>
            </li>
            
            
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem