const initalState = {
    todos: ["Stani od spienje", "Jadi", "Vezbaj React"]
}

const TodoReducer = (state=initalState, action) => {
    switch(action.type) {
        case "ADD_TODO":
        var index = state.todos.indexOf(action.payload);
        if(index !== 0) {
        return {
            ...state,
            todos: [
                action.payload,
                ...state.todos
            ]
          }
        }
        return state;
        case "REMOVE_TODO":
        return {
            ...state,
            todos: [
            ...state.todos.filter((todo) => {
                return todo !== action.payload
            })
        ]
        }
        default: return state;
    }
}

export default TodoReducer;