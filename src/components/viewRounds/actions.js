import { db } from '../../services/firebase';
import { DELETE_ROUND, rounds } from '../home/reducers';

const players = db.ref('players');

export function deleteRd(name, id){
  return {
    type: DELETE_ROUND,
    payload: players.child(name).child(id).remove()
      .then(() => id)
  };
}

