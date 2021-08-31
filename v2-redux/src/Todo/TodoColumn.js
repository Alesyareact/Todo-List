import React from "react";
import PropTypes from "prop-types";
import TodoForm from "./TodoForm";
import "./TodoColumn.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function TodoColumn({ columnName, columnStatus }) {
  const tasks = useSelector((state) => state.tasks);
  const statusTasks = tasks.filter(
    (task) => task.columnStatus === columnStatus
  );
  console.log("statusTasks");
  console.log(statusTasks);
  const {
    tasks: { remove },
  } = useDispatch();

  function handleDragStart(e, uniqueId) {
    e.dataTransfer.setData("id", uniqueId);
    console.log("dragstart");
  }

  function onDragOver(e) {
    e.preventDefault();
    console.log("ondragover");
  }

  const {
    tasks: { changeStatus },
  } = useDispatch();

  function onDrop(e) {
    const id = e.dataTransfer.getData("id");
    const targetStatus = columnStatus;
    changeStatus(id, targetStatus);
    console.log("ondrop");
  }

  return (
    <div className="list">
      <div className="top-list">
        <div onDragOver={onDragOver} onDrop={(e) => onDrop(e)}>
          {columnName}
        </div>
        <TodoForm columnStatus={columnStatus} />
      </div>
      <div className="tasks">
        {statusTasks.map((task) => (
          <div draggable onDragStart={(e) => handleDragStart(e, task.text)}>
            <div className="yourTask">
              {task.text}
              <button onClick={() => remove(task.id)}> Remove </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

TodoColumn.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  someMethod: PropTypes.func,
};

export default TodoColumn;
