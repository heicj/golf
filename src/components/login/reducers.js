export const SIGNIN = 'SIGNIN';

export function auth(state = false, { type }){
  switch(type){
    case SIGNIN:
      return true;
    default:
      return state;
  }
}