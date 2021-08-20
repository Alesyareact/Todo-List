import './TodoForm.css'
import { useState } from "react";

function TodoForm({ addTask, columnStatus}) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput, columnStatus)
        setUserInput("")
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }


    return (
        <form onClick={handleSubmit}>
            <input type="text" size="40" value={userInput} onChange={handleChange} onKeyDown={handleKeyPress}/>
            <button>Add</button>
        </form>
    )
}

export default TodoForm