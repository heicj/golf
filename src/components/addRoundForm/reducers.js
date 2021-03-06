export const ADD_HOLE_SCORE = 'ADD_HOLE_SCORE';
export const UPDATE_HOLE_SCORE = 'UPDATE_HOLE_SCORE';
export const RESET_HOLE_SCORE = 'RESET_HOLE_SCORE';
export const ADD_PUTT_SCORE = 'ADD_PUTT_SCORE';
export const RESET_PUTTS = 'RESET_PUTTS';
export const UPDATE_PUTT_SCORE = 'UPDATE_PUTT_SCORE';
export const CHOOSE_TEE = 'CHOOSE_TEE';
export const SELECT_PLAYER = 'SELECT_PLAYER';
export const NEXT_HOLE = 'NEXT_HOLE';
export const PREV_HOLE = 'PREV_HOLE';
export const TOGGLE_FIR = 'TOGGLE_FIR';
export const TOGGLE_GIR = 'TOGGLE_GIR';
export const GIR_RESET = 'GIR_RESET';
export const TOTAL_FIR = 'TOTAL_FIR';
export const FIR_RESET = 'FIR_RESET';

const initialState = Array(18).fill(0);

export function holesScore(state = initialState, { type, payload }){
  switch(type){
    case ADD_HOLE_SCORE:
      return state.map((hole, i) => payload.id === i ? payload.value : hole);
    
    case UPDATE_HOLE_SCORE:
      return state.map((hole, i) => payload.id === i ? payload.value : hole);
    case RESET_HOLE_SCORE:
      return initialState;  
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
    case RESET_PUTTS:
      return initialState;
    default:
      return state;
  }
}

const firGirInitialState = Array(18).fill(false); 

export function fir(state = firGirInitialState, { type, payload }){
  switch(type){
    case TOGGLE_FIR:
      return state.map((h, i) => payload === i ? !state[i] : h);
    case FIR_RESET:
      return firGirInitialState;
    default:
      return state;
  }
}

export function gir(state = firGirInitialState, { type, payload }){
  switch(type){
    case TOGGLE_GIR:
      return state.map((h, i) => payload === i ? !state[i] : h);
    case GIR_RESET:
      return firGirInitialState;
    default:
      return state;
  }
}

export function tee(state = 'white', { type, payload }){
  switch(type){
    case CHOOSE_TEE:
      return payload;
    default:
      return state;
  }
}

export function player(state = '', { type, payload }){
  switch(type){
    case SELECT_PLAYER:
      return payload;
    default:
      return state;
  }
}

export function hole(state = 1, { type }){
  switch(type){
    case NEXT_HOLE:
      return state + 1;
    case PREV_HOLE: 
      return state - 1;
    default:
      return state;
  }
}

export function rdFirTotal(state = 0, { type, payload }){
  switch(type){
    case TOTAL_FIR:
      return payload;
    default:
      return state;
  }
}