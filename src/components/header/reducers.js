export const TOGGLE_MENU_VISIBILITY = 'TOGGLE_MENU_VISIBILITY';

export function toggleMenuVisibility(state = false, { type, payload }){
  switch(type){
    case TOGGLE_MENU_VISIBILITY:
      return !state;
    default:
      return state;
  }
}