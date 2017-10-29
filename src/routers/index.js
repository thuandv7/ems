import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { StackNavigator, addNavigationHelpers, TabNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MapScreen from '../screens/MapScreen';
import SettingsScreen from '../screens/SettingsScreen';


//import { HomeScreen, MapScreen, LoginScreen, NotificationScreen, SettingsScreen } from '../screens';

// const Tab = TabNavigator({
//     TabHome: {
//         screen: HomeScreen,
//     },
//     TabMap: {
//         screen: MapScreen,
//     },
//     TabNoti: {
//         screen: NotificationScreen,
//     },
//     TabSetting: {
//         screen: SettingsScreen,
//     }
// }, {
//     tabBarPosition: 'bottom',
//     animationEnabled: true,
//     tabBarOptions: {
//         activeTintColor: '#e91e63',
//     },
// });


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
            screen: HomeScreen,
            navigationOptions: {
                title: "HOME",
                headerLeft: null
            }
        },
    }, {
        navigationOptions: {
            //headerBackTitle: null
        }
    }
);

class AppRoot extends React.Component {
    render() {
        const navigation = addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.nav});
        return (
            <AppNav navigation={navigation} />
        );
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav
});

export const AppWithNavState = connect(mapStateToProps)(AppRoot);