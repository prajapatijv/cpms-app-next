import React from 'react';

const UserList = ({ users, selectedUser, onSelectUser }) => {
    return(
        <div>
            <h2>Manage Users</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                    </tr>
                </thead>
                <tbody>
                    <ListUsers users={users} onSelectUser={onSelectUser} />
                </tbody>
            </table>
        </div>
    );
}

const ListUsers = ({ users, onSelectUser }) => {
    return (
        users.map(user =>
            <tr key={user.id} onClick={() => onSelectUser(user)} >
                <td>{user.fullName} </td>
                <td>{user.userName} </td>
            </tr>
        )
    );
}

export default UserList;
