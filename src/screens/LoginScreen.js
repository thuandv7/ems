/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import FromLogin from '../components/auth/FormLogin';

class LoginScreen extends Component {
  static navigationOptions = {
     // !!! Hide Header
  }
  render() {
    console.log('==================NAV==================');
    console.log(this.props.nav);
    console.log('===================AUTH=================');
    console.log(this.props.auth);
    return (
      <FromLogin />
    );
  }
}
mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch({type: "HOME"}),
    onLogin: () => dispatch({type: "HIHI"})
  }
}
mapStateToProps = (state) => {
  return {
    nav: state.nav,
    auth: state.auth
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
