export const LOAD_ROUNDS = 'LOAD_ROUNDS';
export const LOAD_SCORE_AVG = 'LOAD_SCORE_AVG';

export function rounds(state = [], { type, payload }){
  switch(type){
    case LOAD_ROUNDS:
      return payload;
    case LOAD_SCORE_AVG:
      return payload;
    default:
      return state;
  }
}
