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
            <div>
                <h1>Manage User</h1>
                {renderUsers(this.props)}
                <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
            </div>
        );
    }
}

function renderUsers(props) {
    return (
        <h1>
            {props.users.length}
        </h1>    
        );
}
    
export default connect(
    state => state.users,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(UserComponent);
