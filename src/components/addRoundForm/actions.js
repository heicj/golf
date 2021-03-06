import { db } from '../../services/firebase';
import { NEXT_HOLE, CHOOSE_TEE, ADD_HOLE_SCORE, ADD_PUTT_SCORE, TOGGLE_FIR, TOGGLE_GIR, TOTAL_FIR, RESET_PUTTS, RESET_HOLE_SCORE, FIR_RESET, GIR_RESET } from './reducers';
import { ADD_ROUND } from '../home/reducers';

const players = db.ref('players');

export function nextHole(){
  return {
    type: NEXT_HOLE
  };
}

export function resetHoleScore(){
  return {
    type: RESET_HOLE_SCORE
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

export function puttReset(){
  return {
    type: RESET_PUTTS
  };
}

export function toggleFir(id){
  return {
    type: TOGGLE_FIR,
    payload: id
  };
}

export function firReset(){
  return {
    type: FIR_RESET
  };
}

export function toggleGir(id){
  return {
    type: TOGGLE_GIR,
    payload: id
  };
}

export function girReset(){
  return {
    type: GIR_RESET
  };
}

export function rdDifferential(score, rating, slope) {
  const scoreInt = parseInt(score);
  const ratingInt = parseInt(rating);
  const slopeInt = parseInt(slope);

  return ((scoreInt - ratingInt) * 113) / slopeInt;
  // return rdDif;
}


export function addRound(round){

  return (dispatch, getState) => {
    let completeRd = round;
    const puttsArray = getState().putts;
    const scoresArray = getState().holesScore;
    const firArray = getState().fir;
    const girArray = getState().gir;

    const totalScore = scoresArray.reduce((acc, curr) => acc + curr, 0);
    const totalPutts = puttsArray.reduce((acc, curr) => acc + curr, 0);
    const totalFir = calcFirGirTotal(firArray);
    const totalGir = calcFirGirTotal(girArray);
    //subtract course rating from score and mulitiply by 113. divide product by the slope
    const differential = rdDifferential(totalScore, round.rating, round.slope);

    completeRd.holesScore = scoresArray,
    completeRd.fir = firArray,
    completeRd.gir = girArray,
    completeRd.putts = puttsArray;
    completeRd.totalScore = totalScore;
    completeRd.totalPutts = totalPutts;
    completeRd.totalFir = totalFir;
    completeRd.totalGir = totalGir;
    completeRd.differential = differential;
    

    dispatch({
      type: ADD_ROUND,
      payload:  players.child(round.player).push(completeRd)
        .then(() => completeRd)
    });
   
  };
}

export function calcFirGirTotal(array){
  return array.reduce((acc, curr) => curr === true ? acc + 1 : acc, 0);
}

export function firTotal(n){
  return {
    type: TOTAL_FIR,
    payload: n
  };
}