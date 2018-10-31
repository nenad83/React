import React from "react";
import { List } from "./List";

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            list: []
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.addToList = this.addToList.bind(this);
    }

    handleOnChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    addToList(e) {
        e.preventDefault();

        this.setState({
            list: [
                ...this.state.list,
                this.state.name
            ],
            name: ""
        })
    }
    render() {
        return(
            <div>
                <form onSubmit={this.addToList}>
                <input 
                type="text"
                placeholder="Enter your name"
                value={this.state.name}
                onChange={this.handleOnChange}
                // onChange={(event)=>this.handleOnChange(event)}
                />
                <button type="submit">+ add todo</button>
                </form>
                <List items={this.state.list} />
                {/* <h2>{this.state.name}</h2> */}
            </div>
        ) 
    }
}