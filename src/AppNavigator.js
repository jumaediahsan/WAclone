import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import ChattScreen from './components/ChattScreen';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import MainScreenNavigator from './components/mainscreen/MainScreenNavigator';
// import ContactDetail from './mainscreen/ContactDetail';

export const AppNavigator = StackNavigator({
  LoginForm: { screen: LoginForm },
  SignupForm: { screen: SignupForm },
  MainScreenNavigator: {
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'WhatsApp',
      headerStyle: { backgroundColor: '#0f4d01' },
      headerTitleStyle: { color: 'white' },
      headerRight:({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />,
    },
   },
  ChattScreen: { screen: ChattScreen },
  // ContactDetail: {screen: ContactDetail},
});

const AppWithNavigationState = ({dispatch, nav}) => {
  console.log(nav);
  return (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
  );
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState)
