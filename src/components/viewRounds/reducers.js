export const CHANGE_NAME = 'CHANGE_NAME';

export function name(state = '', { type, payload }){
  switch(type){
    case CHANGE_NAME:
      return payload;
    default:
      return state;
  }
}