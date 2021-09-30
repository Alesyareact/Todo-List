import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoForm from "./TodoForm";
import "./TodoColumn.css";
import { useSelector, useDispatch } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";

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

  // const {
  //   columns: { renameColumn },
  // } = useDispatch();
  const {
    tasks: { setUpdate },
  } = useDispatch();

  const [hidden, setHidden] = useState(false);

  return (
    <div className="list" onDragOver={onDragOver} onDrop={(e) => onDrop(e)}>
      <div className="top-list">
        <div className="edit">
          <OutsideClickHandler>
            <div
              contenteditable="true"
              onClick={() => setHidden(true)}

              // onInput={(e) => {
              //   const newName = e.currentTarget.textContent;
              //   // renameColumn(newName, columnId);
              //   setColumnRename(newName);
              // }}
            >
              {columnName}
            </div>
          </OutsideClickHandler>
          {hidden}
          <button
            onClick={() => {
              // создать переменную, в которой будет хранится флаг удаления колонки

              let deleteCol = true;

              const tasksInDeleteColumn = tasks.filter(
                (task) => task.columnId === columnId
              );

              console.log(tasks[0]);
              if (tasksInDeleteColumn.length > 0) {
                deleteCol = window.confirm(
                  `Do you want to delete a column ${columnName}?`
                );

                // меняем флаг при необходимочсти
              }

              if (deleteCol) {
                removeColumn(columnId);
              }
              // если флаг true то удаляем колонку иначе не удаляем
            }}
          >
            remove Col
          </button>
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
              <input
                type="text"
                id={task.id}
                value={task.text}
                onInput={(e) => {
                  setUpdate(e.currentTarget.textContent, task.id);
                }}
              />
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
