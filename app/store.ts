/**
 * Use this to setup redux store
 */

import { accountReducer } from '../src/Account/store';
import { applyMiddleware, createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  accountReducer,
});

const middlewares = [
  /* other middlewares */
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, applyMiddleware(...middlewares));
