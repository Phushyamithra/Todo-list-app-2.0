import './App.css';
import { useState } from "react";
import { v4 as uuid } from "uuid";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const updateTodo = (e) => {
    setTodo(e.target.value);
  }

  const addToList = () => {
    if (todo.trim()) {
      setTodoList([...todoList, { id: uuid(), item: todo, isCompleted: false }]);
      setTodo("");
    }
  }

  const deleteTask = (id) => {
    const filteredTasks = todoList.filter(task => task.id !== id);
    setTodoList(filteredTasks);
  }

  const markCompleted = (id) => {
    const updatedList = todoList.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task);
    setTodoList(updatedList);
  }

  return (
    <div className="App">
      <div className="glass-frame">
        <h1>My Todolist</h1>
        <div className="input-container">
          <input value={todo} type="text" onChange={updateTodo} placeholder="Add your items..." />
          <button onClick={addToList}>Add</button>
        </div>
        <div className="todo-list">
          {todoList && todoList.length > 0 && todoList.map((task) => {
            return (
              <div key={task.id} className="todo-item">
                <label className={task.isCompleted ? 'strike-complete' : ''}>
                  <input type="checkbox" 
                         checked={task.isCompleted} 
                         onChange={() => markCompleted(task.id)} 
                         className="checkbox" />
                  {task.item}
                </label>
                <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
