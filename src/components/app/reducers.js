export const LOAD_START = 'LOADING_START';
export const LOAD_END = 'LOADING_END';

export function loading(state = false, { type }){
  switch(type){
    case LOAD_START:
      return true;
    case LOAD_END:
      return false;
    default:
      return state;
  }
}