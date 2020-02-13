import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import history from '../navigation/history';
import Routes from '../navigation';

export default class RootContainer extends Component {
  render() {
    return (
      <Router history={history}>
        <Routes />
      </Router>
    );
  }
}
