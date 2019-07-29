export const LOAD_ROUND = 'LOAD_ROUND';

export function singleRound(state = [], { type, payload }){
  switch(type){
    case LOAD_ROUND:
      return payload;
    default:
      return state;
  }
}