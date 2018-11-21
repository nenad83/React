import {createStore, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";

// import thunk from "redux-thunk";
import combine from "./reducers";

const customMiddleware = ({dispatch, store}) => next => action => {
    if(typeof action === "function") {
        return action(dispatch, store);
    }
    return next(action);
}

const middleware = applyMiddleware(customMiddleware, createLogger());

export default createStore(combine, middleware);