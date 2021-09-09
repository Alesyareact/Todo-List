import { useState } from "react";
import "./TodoForm.css";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

function TodoForm({ columnId }) {
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
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          addTask(userInput, columnId);
          setUserInput("");
        }}
      >
        Add
      </button>
    </form>
  );
}

TodoForm.propTypes = {
  columnId: PropTypes.string.isRequired,
};

export default TodoForm;
