// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { toggl } from './toggl';

const rootReducer = combineReducers({
  router,
  toggl,
});

export default rootReducer;
