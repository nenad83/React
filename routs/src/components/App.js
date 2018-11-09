import React from "react";
import {Route} from "react-router-dom";
import {Header} from "./Header";
import {Home} from "./Home";
import {Galery} from "./Galery";
import {ImageDetails} from "./ImageDetails";


export class App extends React.Component {
    render() {
        return(
            <div id="app">
                    <Header />

                    <Route exact path="/" component={Home} />
                    <Route path="/galery" component={Galery} />
                    <Route path="/image/:id" component={ImageDetails} />

            </div>
        )
    }
}


