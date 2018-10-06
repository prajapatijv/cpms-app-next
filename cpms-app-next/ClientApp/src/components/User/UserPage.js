import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/UserStore';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import UserList from './UserList';
import UserDetails from './UserDetails';

class UserPage extends Component {
    componentDidMount() {
        this.props.loadUsers();
    }

    componentDidUpdate(prevProps) {
        //if (prevProps.users !== this.props.users) {
            // This method runs when incoming props (e.g., route params) change
          //  this.props.loadUsers();
        //}
    }

    render() {
        const { user, onSubmitUser, onDeleteUser} = this.props;
        return (
            <div>
                <Grid container spacing={16}>
                        <UserList {...this.props} />
                        <UserDetails user={user} initialValues={user} onSubmitUser={onSubmitUser} onDeleteUser={onDeleteUser} />
                </Grid>
            </div>
        );
    }
}

export default connect(
    state => state.users,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(UserPage);
