export const LOAD_WISHLIST = 'LOAD_WISHLIST';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';

export function wishlist(state = [], { type, payload }){
  switch(type){
    case LOAD_WISHLIST: 
      return payload;
    case ADD_TO_WISHLIST:
      return [payload, ...state];
    default:
      return state;  
  }
}