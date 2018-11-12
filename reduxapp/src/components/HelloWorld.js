import React from "react";

export class HelloWorld extends React.Component{
    render() {
        return(
            <div>
                <h2>Hello my name is {this.props.user.name} and I'm learning {this.props.technology}</h2>
            </div>
        )
    }
}