import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import TabNavi from './TabNavi';

export const AppNav = StackNavigator({
        Login: {
            screen: LoginScreen,
            navigationOptions: ({
                navigation
            }) => ({
                title: 'Login',
                headerBackTitle: null,
            }),
        },
        Home: {
            screen: TabNavi,
            navigationOptions: {
                title: "HOME",
               // headerLeft: null
            }
        },
    }, {
        navigationOptions: {
            //headerBackTitle: null
        },
        cardStyle: {
            backgroundColor: '#fff'
        }
    }
);

class AppRoot extends React.Component {
    render() {
        const navigation = addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav });
        return (
            <AppNav navigation={navigation} />
        );
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav
});

export const AppWithNavState = connect(mapStateToProps)(AppRoot);