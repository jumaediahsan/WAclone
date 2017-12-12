// import React,{Component} from 'react';
// import { NavigationActions } from 'react-navigation';
// import firebase from 'firebase';
//
// class Backend extends Component {
//   uid = '';
//   messagesRef = null;
//
// //initialize firebase backend
//   componentWillMount() {
//     firebase.initializeApp({
//       apiKey: 'AIzaSyBPWgayfbyYN5FJD0t1OG9RquSMkH-aGIg',
//       authDomain: 'whatsapp-44139.firebaseapp.com',
//       databaseURL: 'https://whatsapp-44139.firebaseio.com',
//       projectId: 'whatsapp-44139',
//       storageBucket: '',
//       messagingSenderId: '363233484256'
//     });
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         this.setUid(user.id)
//         const resetNavigator = NavigationActions.reset({
//           index: 0,
//           actions: [
//               NavigationActions.navigate({
//                   routeName: 'MainScreenNavigator',
//               })
//           ],
//       });
//       dispatch(resetNavigator);
//       }else {
//         const resetNavigator = NavigationActions.reset({
//           index: 0,
//           actions: [
//               NavigationActions.navigate({
//                   routeName: 'LoginForm',
//               })
//           ],
//       });
//       dispatch(resetNavigator);
//       }
//     });
//   }
// setUid(value) {
//     this.uid = value;
//   }
// getUid() {
//   return this.uid;
// }
//
// //retrieve the messages from the Backend
//
// loadMessages(callback){
//   const { currentUser } = firebase.auth()
//   this.messagesRef = firebase.database().ref(`messages/${currentUser.uid}`);
//   this.messagesRef.off();
//   const onReceive = (data) => {
//     const message = data.val();
//     callback({
//       _id:data.key,
//       text: message.text,
//       createdAt: new Date(message.createdAt),
//       // user: _id: message.user._uid
//     });
//   };
//   this.messagesRef.limitTolast(20).on('child_added', onReceive);
// }
//
// //send the message to the Backend
//
// sendMessage(message) {
//   for (let i = 0; i < message.length; i++ ) {
//     this.messagesRef.push({
//       text: message[i].text,
//       user: message[i].user,
//       createdAt: firebase.database.ServerValue.TIMESTAMP,
//     });
//   }
// }
//
// //close the connection to the Backend
// closeChat() {
//   if(this.messagesRef) {
//     this.messagesRef.off();
//     }
//   }
// }
// export default new Backend();
