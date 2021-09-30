import { useState } from "react";
import "./TodoForm.css";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

function TodoForm({ columnId }) {
  const {
    tasks: { addTask },
  } = useDispatch();

  const [userInput, setUserInput] = useState("");
  const [userInputValue, setUserInputValue] = useState("", false);
  const [userInputError, setuserInputError] = useState(
    "Поле не может быть пустым"
  );

  const blurHandler = (e) => {
    switch (userInput) {
      case "input":
        setUserInputValue(true);
        break;
      default:
        break;
    }
  };

  return (
    <form>
      {userInputValue && userInputError && <div>{userInputError}</div>}
      <input
        onBlur={(e) => blurHandler(e)}
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

          if (!userInput) {
            setuserInputError("Поле не может быть пустым");
          }
          if (userInput) {
            addTask(userInput, columnId);
          }

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
