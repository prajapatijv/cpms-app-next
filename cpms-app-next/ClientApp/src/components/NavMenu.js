import React from 'react';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export default props => (
<div>
    <div className="sidebar-sticky">
        <ul className="nav flex-column">
            <li key="home" className="nav-item">
                <NavLink className="nav-link" to="/" exact >Home</NavLink>
            </li>
            <li key="users" className="nav-item">
                <NavLink className="nav-link" to="/users" exact >Users</NavLink>
            </li>
        </ul>
    </div>
</div>
);
