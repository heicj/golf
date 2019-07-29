import { db } from '../../services/firebase';
import { LOAD_ROUND } from './reducers';

const players = db.ref('players');

export function getRoundById(name, id){
  return {
    type: LOAD_ROUND,
    payload: players.child(name).child(id).once('value').then(data => {
      let rd = data.val();
      console.log(rd);
      return rd;
    })
  };
}