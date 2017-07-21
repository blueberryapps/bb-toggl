/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import TogglPage from './containers/TogglPage';

export default () => (
  <App>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/toggl" component={TogglPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
