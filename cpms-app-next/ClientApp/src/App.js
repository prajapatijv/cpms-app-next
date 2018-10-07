import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import UserPage from './components/User/UserPage';
import UserDetails from './components/User/UserDetails';

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={UserPage} />
        <Route exact path='/users/:id' component={UserDetails} />
    </Layout>
);
