import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MapScreen from '../screens/MapScreen';
import SettingsScreen from '../screens/SettingsScreen';

import { primaryColor } from '../utils/Colors';

import { ic_list, ic_map, ic_reminders, ic_settings } from '../imgs';

const TabNavi = TabNavigator({
    TabHome: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image
                  source={ic_list}
                  style={[styles.icon, {tintColor: tintColor}]}
                />
              )
        }
    },
    TabMap: {
        screen: MapScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image
                  source={ic_map}
                  style={[styles.icon, {tintColor: tintColor}]}
                />
              )
        }
    },
    TabNoti: {
        screen: NotificationScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image
                  source={ ic_reminders }
                  style={[styles.icon, {tintColor: tintColor}]}
                />
              )
        }
    },
    TabSetting: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Image
                  source={ ic_settings }
                  style={[styles.icon, {tintColor: tintColor}]}
                />
              )
        }
    }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: primaryColor,
        showLabel: false
    },
});

const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
});

  export default TabNavi;