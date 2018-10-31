import React from "react";

export const MovieInfo = (props) => {
    return (
        <div className="movie-info" style={{color:"white", fontSize:"25px", backgroundColor: "green", textAlign: "center" }}>
            <h2>Name: {props.movie.name}</h2>
            <h3>Description: {props.movie.description}</h3>
            <h3>Rating: {props.movie.rating}</h3>
        </div>
    )
}

