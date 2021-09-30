import "./App.css";
import TodoColumn from "./Todo/TodoColumn";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const columns = useSelector((state) => state.columns);
  const {
    columns: { addColumn },
  } = useDispatch();

  const [columnInput, setColumnInput] = useState("");

  return (
    <div className="wrapper">
      <div className="card">
        <h1>Todo List with React</h1>
        <div className="lists">
          {columns.map((state) => (
            <TodoColumn
              columnName={state.columnName}
              columnId={state.columnId}
              key={state.columnId}
            />
          ))}
          <div className="addColumn">
            <input
              type="text"
              value={columnInput}
              onChange={(e) => {
                setColumnInput(e.target.value);
              }}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log(e);
                addColumn(columnInput);
                setColumnInput("");
              }}
            >
              add column
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
