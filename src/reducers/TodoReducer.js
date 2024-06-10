// Reducer function to manage state transitions based on action types
const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'habit': {
            return {
                ...state,
                habitTodo: [...state.habitTodo, action.payload]
            };
        }
        case 'productivity': {
            return {
                ...state,
                workTodo: [...state.workTodo, action.payload]
            };
        }
        case 'personal': {
            return {
                ...state,
                taskTodo: [...state.taskTodo, action.payload]
            };
        }
        default: return state;
    }
};

export default TodoReducer;
