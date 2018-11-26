import React from 'react';


export const UserTable = (props) => {
    
        return(
            <div id="user-table">
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        props.users.length !==0 

                        ?

                        props.users.map((user) => {
                            return(
                                <tr key={user._id}>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td><button onClick={()=> props.deleteUser(user._id)}>-</button></td>
                            </tr>
                            )
                        })

                        :

                        null
                    }

                   
                    </tbody>
                
            </table>
            </div>
        )
    
}