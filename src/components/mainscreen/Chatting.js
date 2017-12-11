import React, { Component } from 'react';
import { Button } from 'react-native';

class Chatting extends Component {
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('ChattScreen', { user: 'jane' })}
        title="Chat with Jane"
      />
    )
  }
}

export default Chatting;
