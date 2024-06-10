import './App.css';
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useTodo } from './contexts/todo-context';
import RadioButton from './RadioButton'; // Import the RadioButton component

const App = () => {
  const [todo, setTodo] = useState(""); // State to manage the input value
  const { habitTodo, workTodo, taskTodo, todoDispatch } = useTodo(); // Destructure values from the context
  const [selectedRadio, setSelectedRadio] = useState(""); // State to manage the selected radio button

  // Handle radio button change
  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  // Update the todo input value
  const updateTodo = (e) => {
    setTodo(e.target.value);
  };

  // Add the todo item to the respective list based on the selected radio button
  const addToList = () => {
    if (todo.trim() && selectedRadio) {
      const task = { id: uuid(), item: todo, isCompleted: false };
      todoDispatch({
        type: selectedRadio,
        payload: task
      });
      setTodo(""); // Clear the input after adding
    }
  };

  // Mark a task as completed or not
  const markCompleted = (taskList, setTaskList, id) => {
    const updatedList = taskList.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task);
    setTaskList(updatedList);
  };

  // Delete a task from the list
  const deleteTask = (taskList, setTaskList, id) => {
    const filteredTasks = taskList.filter(task => task.id !== id);
    setTaskList(filteredTasks);
  };

  return (
    <div className="App">
      <div className="glass-frame">
        <h1>My Todolist</h1>
        <div className="input-container">
          <input value={todo} type="text" onChange={updateTodo} placeholder="Add your items..." />
          <h2>Select the type of Todo:</h2>
          <RadioButton
            label="Habit Development"
            value="habit"
            checked={selectedRadio === "habit"}
            onChange={handleRadioChange}
          />
          <RadioButton
            label="Productivity"
            value="productivity"
            checked={selectedRadio === "productivity"}
            onChange={handleRadioChange}
          />
          <RadioButton
            label="Personal Development"
            value="personal"
            checked={selectedRadio === "personal"}
            onChange={handleRadioChange}
          />
          <button onClick={addToList}>Add</button>
        </div>
        <div className="todo-list">
          <h3>Habit Todos</h3>
          {habitTodo.map((task) => (
            <div key={task.id} className="todo-item">
              <label className={task.isCompleted ? 'strike-complete' : ''}>
                <input type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => markCompleted(habitTodo, setTodo, task.id)}
                  className="checkbox" />
                {task.item}
              </label>
              <button className="delete-button" onClick={() => deleteTask(habitTodo, setTodo, task.id)}>Delete</button>
            </div>
          ))}
          <h3>Productivity Todos</h3>
          {workTodo.map((task) => (
            <div key={task.id} className="todo-item">
              <label className={task.isCompleted ? 'strike-complete' : ''}>
                <input type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => markCompleted(workTodo, setTodo, task.id)}
                  className="checkbox" />
                {task.item}
              </label>
              <button className="delete-button" onClick={() => deleteTask(workTodo, setTodo, task.id)}>Delete</button>
            </div>
          ))}
          <h3>Personal Development Todos</h3>
          {taskTodo.map((task) => (
            <div key={task.id} className="todo-item">
              <label className={task.isCompleted ? 'strike-complete' : ''}>
                <input type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => markCompleted(taskTodo, setTodo, task.id)}
                  className="checkbox" />
                {task.item}
              </label>
              <button className="delete-button" onClick={() => deleteTask(taskTodo, setTodo, task.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
