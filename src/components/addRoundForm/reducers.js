export const ADD_HOLE_SCORE = 'ADD_HOLE_SCORE';
export const UPDATE_HOLE_SCORE = 'UPDATE_HOLE_SCORE';
export const ADD_PUTT_SCORE = 'ADD_PUTT_SCORE';
export const UPDATE_PUTT_SCORE = 'UPDATE_PUTT_SCORE';

const initialState = Array(18).fill('');

export function holes(state = initialState, { type, payload }){
  switch(type){
    case ADD_HOLE_SCORE:
      return state.map((hole, i) => payload.id === i ? payload.value : hole);
    
    case UPDATE_HOLE_SCORE:
      return state.map((hole, i) => payload.id === i ? payload.value : hole);
      
    default:
      return state;
  }
}

export function putts(state = initialState, { type, payload }){
  switch(type){
    case ADD_PUTT_SCORE:
      return state.map((hole, i) => payload.id === i ? payload.value : hole);
    case UPDATE_PUTT_SCORE:
      return state.map((hole, i) => payload.id === i ? payload.value : hole);
    default:
      return state;
  }
}