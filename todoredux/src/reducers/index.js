import {combineReducers} from "redux"

import TodoReducer from "./TodoReducer"
import usersReducer from "./UsersReducer"

export default combineReducers ({
    TodoReducer,
    usersReducer
})