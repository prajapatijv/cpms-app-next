import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../../store/UserStore';

class Users extends Component {
    componentWillMount() {
        // This method runs when the component is first added to the page
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
                debugger
                {this.props.users}
                <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
            </div>
        );
    }
}


export default connect(
    state => state.weatherForecasts,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Users);
