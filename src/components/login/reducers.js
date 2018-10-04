export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';


export function auth(state = false, { type }){
  switch(type){
    case SIGNIN:
      return true;
    case SIGNOUT:
      return false;
    default:
      return state;
  }
}