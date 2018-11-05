import React from "react";

export class Users extends React.Component {
    render() {
        return (
            <div className="user-list">
                {
                    this.props.data.filter(user => {return user.address.street === "Hoeger Mall"}).map((user) => {
                        return (
                            <div key={user.id} className="single-user">
                                <h2>{user.name}</h2>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}