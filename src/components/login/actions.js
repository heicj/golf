import { SIGNIN, SIGNOUT } from './reducers';

export function userSignin() {
  return {
    type: SIGNIN
  };
}

export function signOut(){
  localStorage.removeItem('golfstats');
  return {
    type: SIGNOUT
  };
}