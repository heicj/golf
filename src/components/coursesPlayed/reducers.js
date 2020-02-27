export const LOAD_COURSES_PLAYED = 'LOAD_COURSES_PLAYED';

export function coursesPlayed(state = [], { type, payload }){
  switch(type){
    case LOAD_COURSES_PLAYED:
      return payload;
    default:
      return state;
  }
}