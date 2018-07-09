import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {renderField } from '../ui'

const UserDetails = props => {

    const { user, pristine, reset, submitting, submitUser} = props
    return (
        (user !== undefined) &&
        <div>
            <h4 className="mb-3">ADD EDIT USER</h4>
            <hr className="mb-4"></hr>
            <form onSubmit={submitUser}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">First name</label>
                        <div>
                            <Field name="firstName" component="input" type="text" placeholder="First Name" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Last name</label>
                        <div>
                            <Field name="lastName" component="input" type="text" placeholder="Last Name" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="userName">Username</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                        </div>
                        <Field name="userName" component="input" placeholder="Username"  required className="form-control" />
                        <div className="invalid-feedback">
                            Your username is required.
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <Field name="password" component="input" type="password" placeholder="Password" required className="form-control" />
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
    )
}

export default reduxForm({
    form: 'userForm',
    enableReinitialize: 'true'
})(UserDetails)

/*const UserDetails = ({ user, onChange}) => {
    return (
        (user !== undefined) &&
        <div>
            <h4 className="mb-3">ADD EDIT USER</h4>
            <hr className="mb-4"></hr>
            <form className="needs-validation" noValidate>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" className="form-control" name="firstName" placeholder="" value={user.firstName} onChange={(e) => { onChange(e) }} required />
                        <div className="invalid-feedback">
                            Valid first name is required.
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" className="form-control" name="lastName" placeholder="" value={user.lastName} onChange={() => { }} required />
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
                        <input type="text" className="form-control" name="username" placeholder="Username" value={user.userName} onChange={() => { }} required />
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
                <div className="row  float-right">
                    <button className="btn btn-outline-primary" type="button">Cancel</button>
                    <button className="btn btn-outline-primary" type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}

export default UserDetails;*/
