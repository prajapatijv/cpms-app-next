import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../../store/UserStore';

class UserComponent extends Component {
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
            <li className="list-group-item" key={user.id}>
                <div>
                    <h6 className="my-0">{user.firstName} {user.lastName}</h6>
                    <small className="text-muted">@{user.userName}</small>
                </div>
                <span className="text-muted">{user.role}</span>
            </li>
        )
    );
}

const UserForm = ({ user }) => {
    return (
        <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Manage Users</h4>
            <form className="needs-validation" novalidate>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                        <div className="invalid-feedback">
                            Valid first name is required.
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                        <div className="invalid-feedback">
                            Valid last name is required.
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="username">Username</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <input type="text" className="form-control" id="username" placeholder="Username" required />
                        <div className="invalid-feedback">
                            Your username is required.
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                    <div className="invalid-feedback">
                        Please enter a valid password.
                    </div>
                </div>
                <hr className="mb-4"></hr>
                <div className="row  float-right">
                    <button className="btn btn-primary" type="button">Cancel</button>
                    <button className="btn btn-primary" type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}
    
export default connect(
    state => state.users,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(UserComponent);
