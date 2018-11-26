import React from 'react';


export class UsersCreator extends React.Component {
    render() {
        return(
            <div id="users-creator">
            <form>
                <p>
                    <input onChange={this.props.handleUserOnChange} value={this.props.user.first_name} name="firstname" type="text" placeholder ="First Name" />
                </p>

                <p>
                    <input onChange={this.props.handleUserOnChange} value={this.props.user.last_name} name="lastname" type="text" placeholder ="Last Name" />
                </p>

                <p>
                    <input onChange={this.props.handleUserOnChange} value={this.props.user.email} name="email" type="text" placeholder ="E-mail" />
                </p>

                <p>
                    <input onChange={this.props.handleUserOnChange} value={this.props.user.password} name="password" type="password" placeholder ="Password" />
                </p>


                <p>
                    <input value={this.props.user.first_name} type="submit" value="Add User" />
                </p>
            </form>
            </div>
        )
    }
}