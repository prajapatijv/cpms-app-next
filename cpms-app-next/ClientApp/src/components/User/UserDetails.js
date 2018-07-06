import React from 'react';

const UserDetails = ({ user }) => {
    return (
        <UserForm user={user} />
    );
}

const UserForm = ({ user }) => {

    /*
    handleChange(e) {
        // If you are using babel, you can use ES 6 dictionary syntax
        // let change = { [e.target.name] = e.target.value }
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
        //this.props.dispatch()
    }*/

    return (
        (user !== undefined) &&
        <div>
            <h4 className="mb-3">ADD EDIT USER</h4>
            <hr className="mb-4"></hr>
            <form className="needs-validation" noValidate>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" className="form-control" name="firstName" placeholder="" value={user.firstName} onChange={(e) => { this.handleChange(e) }} required />
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


export default UserDetails;
