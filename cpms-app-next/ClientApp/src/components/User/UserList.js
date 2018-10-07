import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';


const UserList = ({ users, selectedUser, onSelectUser, onAddUser, onDeleteUser }) => {
    //const { classes } = props;

    return (
        <Table aria-labelledby="tableTitle">
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>UserID</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <ListUsers users={users} onSelectUser={onSelectUser} onDeleteUser={onDeleteUser} />
            </TableBody>
            <Button variant="fab" color="primary" aria-label="Add" >
                <AddIcon />
            </Button>
        </Table>

    );
}

const ListUsers = ({ users, onSelectUser }) => {
    return (
        users.map(user =>
            <TableRow hover key={user.id}>
                <TableCell component="th" scope="row">
                    {user.fullName}
                </TableCell>
                <TableCell>{user.userName}</TableCell>
            </TableRow>
        )
    );
}

export default UserList;

/*
 
             <tr key={user.id} className={user.selected ? 'table-active' :''} onClick={() => onSelectUser(user)} >
                <td>{user.fullName} </td>
                <td>{user.userName} </td>
            </tr>

<h4 className="d-inline">Manage Users</h4>
    <hr className="mb-4"></hr>
    <button type="button" className="btn btn-outline-dark d-inline float-right" onClick={onAddUser}>+</button>
    <div className="table-responsive">
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
*/