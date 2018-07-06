﻿import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/UserStore';
import UserList from './UserList';
import UserDetails from './UserDetails';

class UserPage extends Component {
    componentDidMount() {
        this.props.loadUsers();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.users !== this.props.users) {
            // This method runs when incoming props (e.g., route params) change
            this.props.loadUsers();
        }
    }

    render() {
        const { selectedUser } = this.props;

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

export default connect(
    state => state.users,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(UserPage);
