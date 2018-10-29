import React from "react";

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                {console.log(this.props)}
                <h2>Hello {this.props.user.name} You are loged in with
                <a href="#"> {this.props.user.email}</a>
                </h2>
            </div>
        )
    }
}