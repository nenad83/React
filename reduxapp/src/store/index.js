import {createStore} from "redux";
import reducer from "../reducers/";

const initalState = {
    technology: "React",
    technologies: ["React", "Angular", "Vue"],
    user: {
        name: "Nenad",
        email: "nenad@gmail.com"
    }
}
export const store = createStore(reducer, initalState);