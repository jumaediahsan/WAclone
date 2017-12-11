import firebase from 'firebase';
import {
  USER_FETCH_SUCCESS,
} from './types';

export const userFetch = () => {

  return (dispatch) => {
    firebase.database().ref(`/users`)
      .once('value') .then(snapshot => {
        dispatch({ type: USER_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
