import React from 'react';
import { Welcome } from './Welcome';
import { Users } from './Users';
import { Clock } from './Clock';

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showWelcome: true,
            users: []
        }
        this.toggleHome = this.toggleHome.bind(this);
        this.fetchUsers = this.fetchUsers.bind(this);
        console.log("Constructor");
    }

    componentWillMount() {
        console.log("Component will mount");
    }

    componentDidMount() {
        console.log("Component did Mount");
        this.fetchUsers();
    }

    componentWilReceivePropr(nextProps) {
        console.log("Component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should component update", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update", prevProps, prevState);
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    toggleHome() {
        this.setState({
            showWelcome: !this.state.showWelcome
        })
    }

    fetchUsers() {
        
            fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({
                    users: data
                })
            })
            .catch((err) => {
                console.log("Error", err)
            })
        
    }

    render() {
        return(
            <div>
                { this.state.showWelcome ? <Welcome name="Nenad" /> : null }
                <button onClick={this.toggleHome}>(Un)mount Component</button>

                <Users data={this.state.users} />
                <Clock />
            </div>
        )
    }
}



