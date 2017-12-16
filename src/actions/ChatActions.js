import firebase from 'firebase';
import { CHAT_FETCH_SUCCESS } from './types';

export const chattFetch = () => {
  return (dispatch) => {
    firebase.database().ref(`/chats`)
      .once('value') .then(snapshot => {
        dispatch({ type: CHAT_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
