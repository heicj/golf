export const GET_ROUND = 'GET_ROUND';

export function editRound(state = {}, { type, payload }){
  switch(type){
    case GET_ROUND:
      return payload;
    default:
      return state;
  }
}