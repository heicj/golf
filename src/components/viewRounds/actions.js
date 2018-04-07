import { db } from '../../services/firebase';

const players = db.ref('players');

export function deleteRd(name, id){
  players.child(name).child(id).remove();
}