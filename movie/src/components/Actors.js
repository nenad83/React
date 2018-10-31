import React from "react";

export class Actors extends React.Component {
    render() {
        return(
            <div className="movie-actors" style={{fontSize:"20px", backgroundColor: "green", textAlign: "center"}}> 
            <h2>Actors:</h2> 
            <br />
            <h4>{this.props.actor.first_actor}</h4>
            <h4>{this.props.actor.second_actor}</h4>
            <h4>{this.props.actor.third_actor}</h4>
            </div>
        )
    }
}