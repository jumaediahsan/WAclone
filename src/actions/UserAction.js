import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import {
  USER_FETCH_SUCCESS,
  CHAT_TABLE_SUCCESS
} from './types';

export const userFetch = () => {

  return (dispatch) => {
    firebase.database().ref(`/users`)
      .once('value') .then(snapshot => {
        dispatch({ type: USER_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};


export const chatTable = (rowData) => {
const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users`).orderByChild("name").equalTo(rowData.name)
      .once('value')
      // .then(snapshot => {
      //   dispatch({ type: CHAT_TABLE_SUCCESS, payload: snapshot.val()
      //   });
      //   const resetNavigator = NavigationActions.reset({
      //     index: 0,
      //     actions: [
      //         NavigationActions.navigate({
      //             routeName: 'ChattScreen',
      //         })
      //     ],
      // });
      // dispatch(resetNavigator);
      // });
      .then(() => {
        firebase.database().ref(`/chats`)
          .push({to:rowData.uid, createdBy: currentUser.uid, createdAt: firebase.database.ServerValue.TIMESTAMP })
          const resetNavigator = NavigationActions.reset({
              index: 0,
              actions: [
                  NavigationActions.navigate({routeName: 'ChattScreen'})
              ],
          });
          dispatch(resetNavigator);
      })
  };
};
