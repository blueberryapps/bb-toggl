// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { toggl } from './toggl';
import { layout } from './layout';

const rootReducer = combineReducers({
  router,
  toggl,
  layout
});

export default rootReducer;
