export const LOAD_ROUNDS = 'LOAD_ROUNDS';

export function rounds(state = [], { type, payload }){
  switch(type){
    case LOAD_ROUNDS:
      return payload;
    default:
      return state;
  }
}