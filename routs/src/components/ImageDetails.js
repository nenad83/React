import React from "react";

export class ImageDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: null
        }
        this.fetchImage = this.fetchImage.bind(this);
    }


    fetchImage() {
        fetch("http://jsonplaceholder.typicode.com/photos/" + this.props.match.params.id)
        .then((res) => {
           return res.json();
        })
        .then((data) => {
            console.log(this.state.image);
            this.setState({
                image: data
            })
        })
        .catch((err) => {
            console.log("Error", err)
        })
    }

    componentDidMount(){
        this.fetchImage()
    }
    render(){
        return(
            <div className="image-details">
            {
                this.state.image !== null
                ?
                <div>
                    <h2>Hello World</h2>
                    <h2>{this.state.image.title}</h2>
                    <img src={this.state.image.url} alt={this.state.image.title}/>
                </div>

                :
                null
            }
            </div>
        )
    }
}