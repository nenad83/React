import React from "react";
import {NavLink} from "react-router-dom";

export class Galery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            album: []
        }
        this.fetchAlbum = this.fetchAlbum.bind(this);
    }

    fetchAlbum () {
        fetch("http://jsonplaceholder.typicode.com/photos/")
        .then((res) => {
           return res.json();
        })
        .then((data) => {
            this.setState({
                album: data
            })
        })
        .catch((err) => {
            console.log("Error", err)
        })
    }

    componentDidMount(){
        this.fetchAlbum();
    }
    render(){
        return(
            <div className="albums"> 
                {/* <h2>Galery</h2> */}
                {
                    this.state.album.map(item => {
                        return(
                            <div key={item.id}>
                                <NavLink to={"/album/" + item.id}>
                                    <img src={item.thumbnailUrl} alt={item.title} />
                                </NavLink>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}