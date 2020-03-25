export const LOAD_DATES = 'LOAD_DATES';
export const ADD_DATE = 'ADD_DATE';

export function backupInfo(state = [], { type, payload }){
  switch(type){
    case LOAD_DATES:
      return payload;
    case ADD_DATE: 
      return [payload, ...state];
    default:
      return state;
  }
}