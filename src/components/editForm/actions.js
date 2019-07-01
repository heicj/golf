import { GET_ROUND } from './reducers';
import { db } from '../../services/firebase';

const players = db.ref('players');

export function getRound(name, id){
  return {
    type: GET_ROUND,
    payload: players.child(id).once('value').then(rd => { return rd; })

  };
}
