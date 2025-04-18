import { db } from '../../services/firebase';
import { DELETE_ROUND, rounds} from '../home/reducers';
import { CHANGE_NAME } from './reducers';

const players = db.ref('players');

export function deleteRd(name, id){
  return {
    type: DELETE_ROUND,
    payload: players.child(name).child(id).remove()
      .then(() => id)
  };
}

export function changeName(name){
  return {
    type: CHANGE_NAME,
    payload: name
  };
}
