const initalState = {
    todos: ["Stani od spienje", "Jadi", "Vezbaj React"]
}

const TodoReducer = (state=initalState, action) => {
    switch(action.type) {
        case "ADD_TODO":
        return {
            ...state,
            todos: [
                action.payload,
                ...state.todos
            ]
        }
        default: return state;
    }
}

export default TodoReducer;