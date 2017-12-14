import React from 'react';
import { TabNavigator } from 'react-navigation';
import ContactList from './ContactList';
import Chatting from './Chatting';
import Calling from './Calling';
// import Status from './Status';

const MainScreenNavigator = TabNavigator({
  CONTACTS: { screen: ContactList,},
  CHATS: { screen: Chatting },
  CALLS: { screen: Calling },
  // Status: { screen: Status },
},
{
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'white',
    labelStyle: {
      fontSize: 13,
    },
    style: {
      backgroundColor: '#0f4d01',
    },
  }
});

export default MainScreenNavigator;
