import React from "react";
import poster from "../assets/images/poster.jpg"
import { Poster } from "./Poster";
import { MovieInfo } from "./MovieInfo";
import { Actors } from "./Actors";

export class App extends React.Component {
    render() {
        let movie = {
            poster: poster,
            name: "The Good the Bad and the Ugly",
            year: "1966",
            description: "Western",
            rating: "*****"
        }

        let actor = {
            first_actor: "Clint Eastwoor",
            second_actor: "Lee van Cleef",
            third_actor: "Eli Wallach"
        }


        return(
            <div>
                <style>{'body { background-color: yellow; }'}</style>
                <Poster 
                movie = {movie}
                actor = {actor}
                />
                <MovieInfo 
                movie = {movie}
                actor = {actor}
                />
                <Actors 
                movie = {movie}
                actor = {actor}
                />
            </div>
        )
    }
}