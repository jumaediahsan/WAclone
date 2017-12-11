import React from 'react';
import { TabNavigator } from 'react-navigation';
import ContactList from './ContactList';
import Chatting from './Chatting';
import Calling from './Calling';
// import Status from './Status';

const MainScreenNavigator = TabNavigator({
  Contact: { screen: ContactList },
  Chatting: { screen: Chatting },
  Call: { screen: Calling },
  // Status: { screen: Status },
});

export default MainScreenNavigator;
