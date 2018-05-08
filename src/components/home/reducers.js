export const LOAD_ROUNDS = 'LOAD_ROUNDS';
export const LOAD_SCORE_AVG = 'LOAD_SCORE_AVG';
export const DELETE_ROUND = 'DELETE_ROUND';
export const ADD_ROUND = 'ADD_ROUND';

export function rounds(state = [], { type, payload }){
  switch(type){
    case LOAD_ROUNDS:
      return payload;
    case LOAD_SCORE_AVG:
      return payload;
    case ADD_ROUND:
      return [
        ...state,
        payload
      ];
    case DELETE_ROUND:
      return state.filter(r => r.key !== payload);
    default:
      return state;
  }
}
