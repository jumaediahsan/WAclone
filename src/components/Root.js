import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ChattScreen from './ChattScreen';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import MainScreenNavigator from './mainscreen/MainScreenNavigator';

export const RootNavigator = StackNavigator({
  LoginForm: { screen: LoginForm },
  SignupForm: { screen: SignupForm },
  MainScreenNavigator: {
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'WhatsApp',
    },
   },
  ChattScreen: { screen: ChattScreen },
});

export default RootNavigator;
