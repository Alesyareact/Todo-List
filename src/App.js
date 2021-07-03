import TodoList from './Todo/TodoList';
import './App.css'

function App() {
  return (
    <div className='wrapper'>
      <div className='card'> 
        <h1>Todo List with React</h1>
        <div className='todos'>
          <TodoList />
          <TodoList />
          <TodoList />
        </div>
      </div>
    </div>
  
    
  )
}

export default App;
