import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField, renderFieldWithPrefix, required, maxLength30, maxLength50, alphaSpaces, alphaNumeric, minLength8} from '../ui'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/UserStore';

class UserDetails extends Component {
    componentDidMount() {
        this.props.loadUsers();
    }

    render() {
        const { user, pristine, reset, submitting, onSubmitUser, handleSubmit, onDeleteUser } = this.props;

        return (
            (user !== undefined) &&
            <div>
                <h4 className="mb-3">ADD EDIT USER</h4>
                <hr className="mb-4"></hr>
                <form onSubmit={handleSubmit(onSubmitUser)}>
                    <div className="row">
                        <Field name="firstName" component={renderField} validate={[required, maxLength50, alphaSpaces]} type="text" label="First Name" className="col-md-6 mb-3" />
                        <Field name="lastName" component={renderField} validate={[required, maxLength50, alphaSpaces]} type="text" label="Last Name" className="col-md-6 mb-3" />
                    </div>
                    <Field name="userName" component={renderFieldWithPrefix} validate={[required, maxLength30, alphaNumeric]} type="text" label="User Name" prefix="@" className="mb-3" />

                    <Field name="password" component={renderField} validate={[required, minLength8]} type="password" label="Password" className="mb-3" />

                    <div className="row  float-right">
                        <button className="btn btn-outline-primary" type="button" onClick={() => onDeleteUser(user)}>Delete</button>
                        <button className="btn btn-outline-primary" type="button" onClick={reset} disabled={pristine || submitting} >Cancel</button>
                        <button className="btn btn-outline-primary" type="submit" disabled={pristine || submitting}>Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm (
    name:'userForm'
)(UserDetails);
