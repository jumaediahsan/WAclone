import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CardSection } from '../common';

class ContactItem extends Component {
    render() {
      const { name } = this.props;
        return (
          <TouchableOpacity onPress={this.props.onPress}>
            <View>
              <CardSection>
                  <Text style={styles.titleStyle}>
                    {name}
                  </Text>
              </CardSection>
            </View>
          </TouchableOpacity>
        );
    }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};
export default ContactItem;
