import React from "react";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return(
        <header>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink activeClassName="active" to="/about">About</NavLink>
                </li>

                <li>
                    <NavLink activeClassName="active" to="/contacts">Contacts</NavLink>
                </li>

                <li>
                    <NavLink activeClassName="active" to="/users">Users</NavLink>
                </li>
            </ul>
        </header>
    )
}