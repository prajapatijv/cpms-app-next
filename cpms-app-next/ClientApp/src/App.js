import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import UserPage from './components/User/UserPage';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/users/:id?' component={UserPage} />
</Layout>
);
