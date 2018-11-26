import React from 'react';
import axios from "axios";

import { UsersCreator } from './UsersCreator';
import { UserTable } from './UsersTable';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstname: "",
                lastname: "",
                email: "",
                role: "",
                password: ""
            },
            users: []
        }

        this.handleUserOnChange = this.handleUserOnChange.bind(this);
        this.fetchUsers = this.fetchUsers.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        this.fetchUsers();
    }

    handleUserOnChange(e) {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    }

    fetchUsers() {
        axios.get("http://localhost:8000/users")
            .then((res) => {
                console.log(res.data)
                this.setState({
                    users: res.data
                })
            })
            .catch((err) => {
                console.log("Error", err)
            })
    }

    deleteUser(userId) {
        axios.delete("http://localhost:8000/users/" + userId)
        .then((res) => {
           
                this.fetchUsers();
            
        })
        .catch((err) => {
            console.log("Error", err)
        })
    }

    createUser(userId) {
        axios.post("http://localhost:8000/users/" + userId)
        .then((res) => {
           
                this.fetchUsers();
            
        })
        .catch((err) => {
            console.log("Error", err)
        })
    }

    render() {
        return(
            <div id="app-container">
            <UsersCreator  
            user={this.state.user}
            handleUserOnChange={this.handleUserOnChange} />
            <UserTable 
            users={this.state.users}
            deleteUser={this.deleteUser}
            />
            </div>
        )
    }
}