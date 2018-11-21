import React from 'react';

export class TodoList extends React.Component {
    render() {
        return(
            <div className="todo-list">
                <ol>
                    {
                        this.props.todos.length !== 0

                        ?

                        this.props.todos.map((todo, i) => {
                            return(
                                <li key={i}>
                                    <span>{todo}</span>
                                    <button type="button" onClick={()=> this.props.removeTodo(todo)}>X</button>
                                </li>
                            )
                        })

                        :

                        <span>Todo List empty</span>
                    }

                </ol>
            </div>
        )
    }
}