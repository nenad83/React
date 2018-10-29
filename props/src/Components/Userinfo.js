import React from "react";
import {Avatar} from "./Avatar";

export const Userinfo = (props) => {
    return (
                <div className = "user-info">
                    <Avatar data={props.data} />

                    <h2>{props.data.first_name} {props.data.last_name} </h2>
                    <a href={"mailto:" + props.data.email}>{props.data.email} </a>
                </div>
    )
}