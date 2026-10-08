export const TOGGLE_MENU_VISIBILITY = 'TOGGLE_MENU_VISIBILITY';

export function menuVisibility(state = false, { type }){
  switch(type){
    case TOGGLE_MENU_VISIBILITY:
      return !state;
    default:
      return state;
  }
}