import React from "react";
import PropTypes from "prop-types";
import TodoForm from "./TodoForm";
import "./TodoColumn.css";

function TodoColumn({
  tasks,
  changeStatus,
  columnStatus,
  columnName,
  remove,
  addTask,
}) {
  function handleDragStart(e, uniqueId) {
    e.dataTransfer.setData("id", uniqueId);
  }

  function onDragOver(e) {
    e.preventDefault();
  }

  function onDrop(e) {
    const id = e.dataTransfer.getData("id");
    const targetStatus = columnStatus;
    changeStatus(id, targetStatus);
  }

  return (
    <div className="list">
      <div className="top-list">
        <div onDragOver={onDragOver} onDrop={(e) => onDrop(e)} className="text">
          {columnName}
        </div>
        <TodoForm addTask={addTask} columnStatus={columnStatus} />
      </div>
      <div className="tasks">
        {tasks.map((task) => {
          return (
            <div draggable onDragStart={(e) => handleDragStart(e, task.body)}>
              <li className="yourTask">
                {" "}
                &nbsp; {task.body}
                <button onClick={() => remove(task.id)}> Удалить </button>
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
}

TodoColumn.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  someMethod: PropTypes.func,
};

export default TodoColumn;
