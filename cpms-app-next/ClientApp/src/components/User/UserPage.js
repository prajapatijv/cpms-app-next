import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/UserStore';
import UserList from './UserList';
import UserDetails from './UserDetails';

class UserPage extends Component {
    componentDidMount() {
        this.props.requestUsers();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.users !== this.props.users) {
            // This method runs when incoming props (e.g., route params) change
            this.props.requestUsers();
        }
    }

    render() {
        const { users, selectedUser, onSelectUser } = this.props;

        return (
            <div className="row">
                <div className="col-md-6 order-md-1">
                    <UserList {...this.props} />
                </div>
                <div className="col-md-6 order-md-1">
                    <UserDetails user={selectedUser} />
                </div>
            </div> 
        );
    }
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

export default connect(
    state => state.users,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(UserPage);
