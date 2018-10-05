import { SIGNIN, SIGNOUT } from './reducers';

export function userSignin() {
  return {
    type: SIGNIN
  };
}

export function signOut(){
  return {
    type: SIGNOUT
  };
}