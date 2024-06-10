import { createContext, useContext, useReducer } from "react";
import TodoReducer from "../reducers/TodoReducer";

const TodoContext = createContext();

// Provider component to wrap around the app and provide the context
const TodoProvider = ({ children }) => {
    const initialState = {
        habitTodo: [],
        workTodo: [],
        taskTodo: []
    };

    // Use reducer to manage the state based on TodoReducer
    const [{ habitTodo, workTodo, taskTodo }, todoDispatch] = useReducer(TodoReducer, initialState);

    return (
        // Provide the context values to the children
        <TodoContext.Provider value={{ habitTodo, taskTodo, workTodo, todoDispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

// Hook to use the TodoContext
const useTodo = () => useContext(TodoContext);

export { useTodo, TodoProvider };
