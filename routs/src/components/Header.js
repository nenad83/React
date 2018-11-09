import React from "react";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return(
        <ul>
            <li>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>

            <li>
                <NavLink activeClassName="active" to="/galery">Galery</NavLink>
            </li>
        </ul>
    )
}