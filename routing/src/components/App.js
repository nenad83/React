import React from "react";
import { Header } from "./Header";
import {Route} from "react-router-dom";
import { Contacts } from "./Contacts";
import { About } from "./About";
import { Home } from "./Home";
import { Users } from "./Users";
import { UserDetails } from "./UserDetails";


export class App extends React.Component {
    render() {
        return(
            <div id="app">
                <Header />

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contacts" component={Contacts} />
                <Route exact path="/users" component={Users} />
                <Route path="/users/:id" component={UserDetails} />
            </div>
        )
    }
}