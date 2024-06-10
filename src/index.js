import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodoProvider } from './contexts/todo-context'; // Import the TodoProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoProvider> {/* Wrap the App with TodoProvider to provide context */}
      <App />
    </TodoProvider>
  </React.StrictMode>
);
