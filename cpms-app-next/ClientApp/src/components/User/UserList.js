import React from 'react';

const UserList = ({ users, selectedUser, onSelectUser, onAddUser, onDeleteUser }) => {
    return(
        <div>
            <h4 className="d-inline">Manage Users</h4>
            <hr className="mb-4"></hr>
            <button type="button" className="btn btn-outline-dark d-inline float-right" onClick={onAddUser}>+</button>
            <div class="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">UserName</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ListUsers users={users} onSelectUser={onSelectUser} onDeleteUser={onDeleteUser} />
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const ListUsers = ({ users, onSelectUser }) => {
    //console.log (users)

    return (
        users.map(user =>
            <tr key={user.id} className={user.selected ? 'table-active' :''} onClick={() => onSelectUser(user)} >
                <td>{user.fullName} </td>
                <td>{user.userName} </td>
            </tr>
        )
    );
}

export default UserList;
