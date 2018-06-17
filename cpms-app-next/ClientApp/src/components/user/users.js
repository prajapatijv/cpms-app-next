import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import { actionCreators } from '../store/WeatherForecasts';

class Users extends Component {

    render() {
        return (
            <div>
                <h1>Manage User</h1>
                <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
            </div>
        );
    }
}


export default Users;
