import { combineReducers } from 'redux';
import Navigation from './Navigation';
import SignReducer from './SignReducer';
import SignUpReducer from './SignUpReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  authsign : SignReducer,
  authsignup: SignUpReducer,
  nav: Navigation,
  usercontact: UserReducer
});
