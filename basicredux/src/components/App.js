import React from 'react';
import {connect} from "react-redux";

import {fetchUser, fetchCV} from "../actions/UserAction";

export class App extends React.Component {

    componentDidMount(){
        this.props.zemiMe();
        this.props.zemiCV();
    }

    render(){
        return(
            <div>
                <h2>Hello, {this.props.jas.name}</h2>
                <h2>Hello, {this.props.cv.name}</h2>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        jas: state.userReducer.user,
        cv: state.userReducer.cv
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        zemiMe: () => {
            dispatch(fetchUser());
        },
        zemiCV: () => {
            dispatch(fetchCV());
        }
    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);