import React from "react";

export const Password = (props) => {
    return (
        <p>
            <input onChange={props.handleChange} 
            value={props.password} 
            type={props.type} 
            name="password" 
            placeholder="Password" />
       
        <span className="reavel-pass hidden" onClick={props.changeInputType}>
            <i className={"far fas " + (props.type == "password" ? "fa-eye-slash" : "fa-eye")}></i>
        </span>
        </p>
    )
}