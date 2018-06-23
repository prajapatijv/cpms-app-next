import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../../store/UserStore';

class UserComponent extends Component {
    componentWillMount() {
        this.props.requestUsers();
    }

    componentWillReceiveProps(nextProps) {
        // This method runs when incoming props (e.g., route params) change
        this.props.requestUsers();
    }

    render() {
        return (
            <div className="row">
                <h1>Manage User</h1>
                <div className="col-md-12">
                    <h4 className="d-flex justify-content-between align-items-center mb-12">
                        <span className="text-muted">+</span>
                        <span className="badge badge-secondary badge-pill">{this.props.users.length}</span>
                    </h4>
                    <ul className="list-group mb-3">
                        <Users users={this.props.users} />
                    </ul>
                </div>
            </div>
        );
    }
}

const Users = ({ users }) => {
    return (
        users.map(user => 
            <li className="list-group-item">
                <div>
                    <h6 className="my-0">{user.firstName} {user.lastName}</h6>
                    <small className="text-muted">@{user.userName}</small>
                </div>
                <span className="text-muted">{user.role}</span>
            </li>
        )
    );
}
    
export default connect(
    state => state.users,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(UserComponent);
