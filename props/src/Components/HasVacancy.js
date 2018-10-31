import React from "react";

export class HasVacancy extends React.Component {
    render() {
        return (
            <div className="has-vacancy">
                {
                    this.props.availability 
                    ? 
                    <h2>Hotel reservation are avaliable</h2> 
                    : 
                    <h2>Reserevation not avaliable</h2>
                }
            </div>
        )
    }
}