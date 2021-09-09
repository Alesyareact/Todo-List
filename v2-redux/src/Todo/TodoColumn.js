import React from "react";
import PropTypes from "prop-types";
import TodoForm from "./TodoForm";
import "./TodoColumn.css";
import { useSelector, useDispatch } from "react-redux";

function TodoColumn({ columnName, columnId }) {
  const tasks = useSelector((state) => state.tasks);
  const statusTasks = tasks.filter((task) => task.columnId === columnId);
  const {
    tasks: { remove },
  } = useDispatch();

  function handleDragStart(e, uniqueId) {
    e.dataTransfer.setData("id", uniqueId);
  }

  function onDragOver(e) {
    e.preventDefault();
  }

  const {
    tasks: { changeStatus },
  } = useDispatch();

  function onDrop(e) {
    const id = e.dataTransfer.getData("id");
    const targetStatus = columnId;
    changeStatus(id, targetStatus);
  }

  const {
    columns: { removeColumn },
  } = useDispatch();

  return (
    <div className="list" onDragOver={onDragOver} onDrop={(e) => onDrop(e)}>
      <div className="top-list">
        <div className="edit">
          <div>{columnName}</div>
          <button onClick={() => removeColumn(columnId)}>remove Col</button>
        </div>
        <TodoForm columnId={columnId} />
      </div>
      <div className="tasks">
        {statusTasks.map((task) => (
          <div
            draggable
            onDragStart={(e) => handleDragStart(e, task.text)}
            key={task.id}
          >
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
  columnName: PropTypes.string.isRequired,
  columnId: PropTypes.string.isRequired,
};

export default TodoColumn;
