import React from 'react';
import { TodoField } from "./TodoField";
import { TodoList } from './TodoList';
import {connect} from "react-redux";


import {addTodo, removeTodo} from "../actions/TodoAction";
import {fetchUsers} from "../actions/UsersAction"
import { Welcome } from './Welcome';

export class App extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            todoValue: ""
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    componentDidMount() {
        this.props.zemiKorisnici();
    }


    handleOnChange(e) {
        console.log(e.target.value);
        this.setState({
           todoValue: e.target.value
        })
    }

    dodadiTodo(todo, e) {
        e.preventDefault();
        if(this.state.todoValue !== ""){
            this.props.addTodo(todo);
            this.setState({
            todoValue: ""
        });
        }
        
        
    }
    
    render() {
        return(
            <div id="app">
                <div className="centered-content">
                <Welcome name="Nenad" 
                age={35}
                />
                    <TodoField
                    handleChange = {this.handleOnChange}
                    todoValue = {this.state.todoValue}
                    addTodo={(event) => this.dodadiTodo(this.state.todoValue, event)}
                    />
                    <TodoList
                     todos={this.props.todos}
                     removeTodo={(todo) => this.props.removeTodo(todo)}
                     />
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
        addTodo: (todo) => {
            
            dispatch(addTodo(todo));
        },
        removeTodo: (todo) => {
            dispatch(removeTodo(todo));
        },
        zemiKorisnici: () => {
            dispatch(fetchUsers());
        }
    }
}

App = connect(mapStateToProps, mapDispatchToProps) (App)