import { LOAD_ROUNDS } from './reducers';
import { db } from '../../services/firebase';

const players = db.ref('players');

export function getRounds(name){
  return {
    type: LOAD_ROUNDS,
    payload: players.child(name).once('value').then(data => {
      const rounds = data.val();
      console.log(rounds);
      Object.keys(rounds).map(key => {
        let round = rounds[key];
        round.key = key;
        return round;
      });
    }
    )
  };
}