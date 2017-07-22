/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import TogglPage from './containers/TogglPage';

export const LOGIN = '/login';
export const TOGGL = '/toggl';
export const HOME = '/';

export default () => (
  <App>
    <Switch>
      <Route path={LOGIN} component={LoginPage} />
      <Route path={TOGGL} component={TogglPage} />
      <Route path={HOME} component={HomePage} />
    </Switch>
  </App>
);
