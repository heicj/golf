import { db } from '../../services/firebase';
import { NEXT_HOLE, CHOOSE_TEE, ADD_HOLE_SCORE, ADD_PUTT_SCORE, TOGGLE_FIR, TOGGLE_GIR } from './reducers';

const players = db.ref('players');

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

export function holeScore({ id, value }){
  //id is the index of the hole
  return {
    type: ADD_HOLE_SCORE,
    payload: { id, value }
  };
}

export function puttScore({ id, value }){
  //id is the index of the hole
  return {
    type: ADD_PUTT_SCORE,
    payload: { id, value }
  };
}

export function toggleFir(id){
  return {
    type: TOGGLE_FIR,
    payload: id
  };
}

export function toggleGir(id){
  return {
    type: TOGGLE_GIR,
    payload: id
  };
}
export function addRound(round){
  players.child('Charlie').push(round);
}