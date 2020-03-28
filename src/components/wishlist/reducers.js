export const LOAD_WISHLIST = 'LOAD_WISHLIST';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const DELETE_WISH = 'DELETE_WISH';

export function wishlist(state = [], { type, payload }){
  switch(type){
    case LOAD_WISHLIST: 
      return payload;
    case ADD_TO_WISHLIST:
      return [payload, ...state];
    case DELETE_WISH:
      return state.filter(W => W.key !== payload);
    default:
      return state;  
  }
}