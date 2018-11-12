import React from 'react';
import ReactDOM from 'react-dom';

import {App} from "./components/App"
import {store} from "./store/"

const render = () => {
    return(
        ReactDOM.render(<App />, 
            document.getElementById('root')
        )
    )
}
render();

store.subscribe(render);

