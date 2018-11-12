import React from "react";
import { HelloWorld } from "./HelloWorld";
import {Buttons} from "./Buttons"

import {store} from "../store/";
import {setTechnology} from "../actions/";

export class App extends  React.Component{
    dispatchTechChange(e) {
        console.dir(e.target.dataset.tech);
        const tech = e.target.dataset.tech;
        store.dispatch(setTechnology(tech));
    }

    render() {
        return(
            <div>
                <HelloWorld technology={store.getState().technology}
                            user = {store.getState().user}
                            />
                <Buttons 
                technologies = {store.getState().technologies} 
                dispatchTechChange={this.dispatchTechChange.bind(this)}
                />            
            </div>
        )
    }
}