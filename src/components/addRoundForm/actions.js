import { NEXT_HOLE, CHOOSE_TEE, ADD_HOLE_SCORE } from './reducers';

export function nextHole(){
  return {
    type: NEXT_HOLE
  };
}

export function teeSelection(){
  return {
    type: CHOOSE_TEE
  };
}

export function holeScore({ id, value } ){
  //id is the index of the hole
  return {
    type: ADD_HOLE_SCORE,
    payload: { id, value }
  };
}