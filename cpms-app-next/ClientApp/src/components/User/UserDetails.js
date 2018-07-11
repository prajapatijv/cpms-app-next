import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {renderField , renderFieldWithPrefix } from '../ui'

const UserDetails = props => {
    const handleSubmit = (values) => {
        debugger;
        //e.preventDefault();

    }

    const { user, pristine, reset, submitting, onSubmitUser, dispatch} = props
    return (
        (user !== undefined) &&
        <div>
            <h4 className="mb-3">ADD EDIT USER</h4>
            <hr className="mb-4"></hr>
            <form>
                <div className="row">
                    <Field name="firstName" component={renderField} type="text" label="First Name" className="col-md-6 mb-3" />
                    <Field name="lastName" component={renderField} type="text" label="Last Name" className="col-md-6 mb-3" />
                </div>
                <Field name="userName" component={renderFieldWithPrefix} type="text" label="User Name" prefix="@" className="mb-3" />

                <Field name="password" component={renderField} type="password" label="Password" className="mb-3" />

                <div className="row  float-right">
                    <button className="btn btn-outline-primary" type="button" onClick={reset} disabled={pristine || submitting} >Cancel</button>
                    <button className="btn btn-outline-primary" type="button" onClick={() => dispatch(onSubmitUser)} disabled={pristine || submitting}>Save</button>
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
