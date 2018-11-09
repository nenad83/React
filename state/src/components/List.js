import React from "react";

export class List extends React.Component {
    render(){
        return(
            <div>
                <ul>
                    {
                        this.props.items.map((item, i) => {
                            return (
                                <li key={i}>
                                    <h2>{item}</h2>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}