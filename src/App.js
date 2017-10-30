/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppWithNavState } from './routers';
import { NavReducer, AuthReducer } from './redux/reducers'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
const rootReducer = combineReducers({
  nav: NavReducer, auth: AuthReducer
});
const store = createStore(rootReducer, {}, applyMiddleware(logger));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavState />
      </Provider>
    );
  }
}