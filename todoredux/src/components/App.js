import React from 'react';
import { TodoField } from "./TodoField";
import { TodoList } from './TodoList';
import {connect} from "react-redux";

import {addTodo} from "../actions/TodoAction";

export class App extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            todoValue: ""
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }


    handleOnChange(e) {
        console.log(e.target.value);
        this.setState({
           todoValue: e.target.value
        })
    }
    
    render() {
        return(
            <div id="app">
                <div className="centered-content">
                    <TodoField
                    handleChange = {this.handleOnChange}
                    todoValue = {this.state.todoValue}
                    addTodo={(event) => this.props.addTodo(this.state.todoValue, event)}
                    />
                    <TodoList todos={this.props.todos}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.TodoReducer.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo, e) => {
            e.preventDefault();
            dispatch(addTodo(todo));
        }
    }
}

App = connect(mapStateToProps, mapDispatchToProps) (App)