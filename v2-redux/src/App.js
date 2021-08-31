import "./App.css";
import TodoColumn from "./Todo/TodoColumn";

function App() {
  return (
    <div className="wrapper">
      <div className="card">
        <h1>Todo List with React</h1>
        <div className="lists">
          <TodoColumn columnName="Doing" columnStatus="doing" />
          <TodoColumn columnName="Completed" columnStatus="completed" />
          <TodoColumn columnName="Rejected" columnStatus="rejected" />
        </div>
      </div>
    </div>
  );
}

export default App;
