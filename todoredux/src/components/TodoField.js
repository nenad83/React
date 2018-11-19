import React from 'react';

export class TodoField extends React.Component {
    render() {
        return(
            <div className="submit">
            <form onSubmit={this.props.addTodo}>
                <input 
                type="text"
                placeholder="Write Todo"
                value={this.props.todoValue}
                onChange={this.props.handleChange}
                />
                <button  type="submit">Enter</button>
                </form>

            </div>
        )
    }
} 