import React from "react";
import {Avatar} from "./Avatar";
import { Userinfo } from "./Userinfo";

export class Comment extends React.Component {
    render() {
        return (
            <div id = "comment">
                <Userinfo data={this.props.author} />
                
                <div className = "user-comment">
                    <p>
                    {this.props.comment.text} 

                    </p>
               
                </div>
                <div className = "comment-date">
                    <span>{this.props.comment.date} </span>
                </div>
                
                
            </div>
        )
    }
}