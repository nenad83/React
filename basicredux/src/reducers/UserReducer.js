const initialState = {
    user: {},
    cv: {}
}

const userReducer = (state= initialState, action) => {
    switch(action.type) {
        case "GET_USER":
        return {
            ...state,
            user: action.payload
        }
        case "GET_CV":
        return {
            ...state,
            cv: action.payloadCV
        }
        default: return state;
    }
}

export default userReducer;