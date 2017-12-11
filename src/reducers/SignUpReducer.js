import {
  NAME_CHANGED,
  ENTER_EMAIL,
  ENTER_PASSWORD,
  SPINNER_SIGNUP,
  SIGNUP_USER_FAIL,
  SIGNUP_SUCCESS
 } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
 };

export default (state= INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME_CHANGED:
      return { ...state, name: action.payload };
    case ENTER_EMAIL:
      return { ...state, email: action.payload };
    case ENTER_PASSWORD:
      return { ...state, password: action.payload };
    case SPINNER_SIGNUP:
      return { ...state, loading: true, error: '' };
    case SIGNUP_SUCCESS:
      return { ...state, user: action.payload, email:'', password:'', loading: false };
    case SIGNUP_USER_FAIL:
      return { ...state, error: 'Authentication Failed', password: '', email: '', loading: false };
    default:
      return state;
  }
};
