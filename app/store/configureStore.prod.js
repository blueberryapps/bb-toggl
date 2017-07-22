// @flow
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from '../utils/PromiseMiddleware/index';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

const history = createBrowserHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(promiseMiddleware, router);

function configureStore(initialState?: Object) {
  return createStore(rootReducer, initialState, enhancer);
}

export default { configureStore, history };
