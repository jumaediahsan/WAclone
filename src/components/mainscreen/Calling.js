import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-elements';

class Calling extends Component {
  render() {
    return (
      <Button
          raised
          icon={{name: 'home', size: 32}}
          buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          title={`Welcome to\nReact Native Elements`}
          />
    )
  }
}

export default Calling;
