import { useState } from "react";
import "./App.css";
import TodoColumn from "./Todo/TodoColumn";

function App() {
  const [tasks, setTasks] = useState([]);

  function changeStatus(body, status) {
    const result = tasks.findIndex((task) => task.body === body);
    tasks[result].status = status;
    setTasks([...tasks]);
  }

  const removeTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  };

  const addTask = (userInput, columnStatus) => {
    if (userInput) {
      const item = {
        id: Math.random().toString(36).substr(2, 9),
        body: userInput,
        status: columnStatus,
      };
      setTasks([...tasks, item]);
    }
  };

  return (
    <div className="wrapper">
      <div className="card">
        <h1>Todo List with React</h1>
        <div className="lists">
          <TodoColumn
            columnName="Doing"
            columnStatus="doing"
            tasks={tasks.filter((task) => {
              return task.status === "doing";
            })}
            changeStatus={changeStatus}
            remove={removeTask}
            addTask={addTask}
          />
          <TodoColumn
            columnName="Completed"
            columnStatus="completed"
            tasks={tasks.filter((task) => {
              return task.status === "completed";
            })}
            changeStatus={changeStatus}
            remove={removeTask}
            addTask={addTask}
          />
          <TodoColumn
            columnName="Rejected"
            columnStatus="rejected"
            tasks={tasks.filter((task) => {
              return task.status === "rejected";
            })}
            changeStatus={changeStatus}
            remove={removeTask}
            addTask={addTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
