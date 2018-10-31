import React from "react";

export class Poster extends React.Component {
    render() {
        return(
            <div id="movie-poster" style={{justifyContent: 'center', alignItems: 'center', textAlign: "center", display: "flex", flexDirection: "row" }}>
                <img src={this.props.movie.poster}
                width = "100" 
                alt = "poster"
                 />
                 <button id="button">Click</button>
                 <p id="p"> Zdravo</p>

                 <script async="true" src="../assets/test.js"></script>
                
            </div>
        )
    }
}