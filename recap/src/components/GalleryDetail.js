import React from "react";
import axios from "axios";




export class GalleryDetail extends React.Component{


    constructor(props) {
        super (props);

        this.state = {
            galleryItem: null
        }
        this.fetchGalleryItem = this.fetchGalleryItem.bind(this);
    }

    fetchGalleryItem(){
        axios.get("https://jsonplaceholder.typicode.com/photos/" + this.props.match.params.id)
        .then((res) => {
            this.setState({
                galleryItem: res.data
            });
        })
        .catch((err) => {
            console.log("Error fetching gallery", err);
        })
    }

    componentDidMount() {
        this.fetchGalleryItem();
    }
    render() {
        console.log(this.state.galleryItem)
        return(
            <div className="gallery-detail">
                {
                    this.state.galleryItem !== null

                    ?
                    <div>
                    <img src={this.state.galleryItem.url} alt={this.state.galleryItem.title} />
                    <h2>{this.state.galleryItem.title}</h2>
                    </div>

                    :

                    <h2>Loading...</h2>
                }
            </div>
        )
    }
}