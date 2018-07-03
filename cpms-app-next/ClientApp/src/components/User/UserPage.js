import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/UserStore';

class UserPage extends Component {
    componentDidMount() {
        this.props.requestUsers();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userData !== this.props.userData) {
            // This method runs when incoming props (e.g., route params) change
            this.props.requestUsers();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 order-md-1">
                    <h2>Manage Users</h2>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">UserName</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ListUsers users={this.props.users} onSelectUser={this.props.onSelectUser} />
                        </tbody>
                    </table>
                </div>
                <UserForm user={this.props.selectedUser} />
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


const UserForm = ({ user }) => {
    if (user === undefined) {
        return (null);
    }
    else {
        return (
            <div className="col-md-6 order-md-1">
                <h4 className="mb-3">ADD EDIT USER</h4>
                <hr className="mb-4"></hr>
                <form className="needs-validation" noValidate>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="" value={user.firstName} required />
                            <div className="invalid-feedback">
                                Valid first name is required.
                        </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="" value={user.lastName} onChange={() => { }} required />
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
                            <input type="text" className="form-control" id="username" placeholder="Username" value={user.userName} onChange={() => { }} required />
                            <div className="invalid-feedback">
                                Your username is required.
                        </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password"   />
                        <div className="invalid-feedback">
                            Please enter a valid password.
                    </div>
                    </div>
                    <div className="row  float-right">
                        <button className="btn btn-outline-primary" type="button">Cancel</button>
                        <button className="btn btn-outline-primary" type="submit">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}
    
export default connect(
    state => state.users,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(UserPage);
