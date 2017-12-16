import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from '../common';

class ChattingItem extends Component {

    render() {
      const { name } = this.props;

        return (
          <TouchableWithoutFeedback onPress={this.props.onPress}>
            <View>
              <CardSection>
                  <Text style={styles.titleStyle}>
                    {name}
                  </Text>
              </CardSection>
            </View>
          </TouchableWithoutFeedback>
        );
    }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};
export default ChattingItem;
