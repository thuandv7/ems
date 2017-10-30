/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppWithNavState } from './routers';
import { NavReducer, AuthReducer, StationReducer } from './redux/reducers'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { AuthMiddleware } from './apis/AuthMiddleware';
import { StationMiddleware } from './apis/StationMiddleware';


const rootReducer = combineReducers({
  nav:      NavReducer, 
  auth:     AuthReducer, 
  stations: StationReducer
});
const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger, AuthMiddleware, StationMiddleware));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavState />
      </Provider>
    );
  }
}