import React from 'react';
import { Router } from 'react-router-dom';
import history from '../navigation/history';
import Routes from '../navigation';

const RootContainer = () => (
  <Router history={history}>
    <Routes />
  </Router>
);

export default RootContainer;
