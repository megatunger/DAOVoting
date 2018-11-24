import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { HomeView } from '../components/Home';
import { Counter } from '../components/Counter';
import { LoginScreen, LoginScreenView } from '../components/LoginScreen';
import { MyproposalView } from '../components/Myproposal';

const propersal = createStackNavigator({
  home: { screen: HomeView, navigationOptions: { header: null } },
  detail: { screen: Counter, navigationOptions: { header: null } }
});
export const auth = createStackNavigator({ LoginScreen: LoginScreenView });
export const app = createBottomTabNavigator(
  {
    Home: {
      screen: propersal,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} size={24} />
        )
      })
    },
    'Add Proposal': {
      screen: Counter,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="plus-circle" color={tintColor} size={24} />
        )
      })
    },
    'My Proposals': {
      screen: MyproposalView,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="star" color={tintColor} size={24} />
        )
      })
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      labelStyle: {
        fontSize: 13
      },
      style: {
        backgroundColor: '#00C091'
      },
      inactiveTintColor: '#382D41'
    }
  }
);
export const Nav = createStackNavigator(
  {
    auth: { screen: LoginScreenView, navigationOptions: { header: null } },
    App: { screen: app, navigationOptions: { header: null } }
  },
  {
    initialRouteName: 'auth'
  }
);
