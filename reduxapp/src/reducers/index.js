export default (state, action) => {
    switch(action.type) {
        case "SET_TECHNOLOGY" :
        return{
            ...state,
            technology: action.technology
        }
        default: return state;
    }
}