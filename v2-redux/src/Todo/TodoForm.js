import { useState } from "react";
import "./TodoForm.css";
import { useDispatch } from "react-redux";

function TodoForm({ columnStatus }) {
  const {
    tasks: { addTask },
  } = useDispatch();

  const [userInput, setUserInput] = useState("");

  return (
    <form>
      <input
        type="text"
        size="40"
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
        // onKeyDown={handleKeyPress}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          addTask(userInput, columnStatus);
        }}
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
