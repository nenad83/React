import React from "react";
import {Route} from "react-router-dom";
import axios from "axios";

import {Home} from "./Home";
import {Gallery} from "./Gallery";
import {GalleryDetail} from "./GalleryDetail";



export class App extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            gallery: []
        }
        this.fetchGallery = this.fetchGallery.bind(this);
    }

    componentDidMount(){
        this.fetchGallery();
    }

    fetchGallery(){
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((res) => {
            this.setState({
                gallery: res.data
            });
        })
        .catch((err) => {
            console.log("Error fetching gallery", err);
        })
    }
    render() {
        return(
            <div className="page">
                <Route exact path="/" render={() => {
                    return <Home hello="Nenad" />
                }} />

                <Route exact path="/gallery" render={()=> {
                    return <Gallery photos={this.state.gallery} />
                }} />

                <Route path="/gallery/:id" component={GalleryDetail} />
            </div>
        )
    }
}