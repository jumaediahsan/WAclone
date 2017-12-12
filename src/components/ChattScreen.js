import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import Backend from './Backend';

class Chatt extends Component {
  state = {
    messages: [],
  };
  componentWillMount() {

  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        // onSend={(message) => {
        //   Backend.sendMessage(message);
        // }}
        // user={{
        //   _id: Backend.getUid(),
        //   nama: this.props.nama,
        // }}
      />
    );
  }
}
//   componentDidMount() {
//     Backend.loadMessages((message) => {
//       this.setState((previousState) => {
//         return {
//           messages: GiftedChat.append(previousState.messages, message),
//         };
//       });
//     });
//   }
//   componentWillUnmount() {
//     Backend.closeChat();
//   }
// }
//
// Chatt.defaultProps = {
//   nama: 'Ahsan',
// };

// Chatt.propTypes = {
//   name: React.propTypes.string,
// };

export default Chatt;
