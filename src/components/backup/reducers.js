export const LOAD_DATES = 'LOAD_DATES';
export const ADD_DATE = 'ADD_DATE';
export const LOAD_DOWNLOAD_DATA = 'LOAD_DOWNLOAD_DATA';

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

export function downloadInfo(state = [], { type, payload }){
  switch(type){
    case LOAD_DOWNLOAD_DATA:  
      return payload;
    default:
      return state;
  }
}