import { LOAD_ROUNDS, LOAD_SCORE_AVG } from './reducers';
import { db } from '../../services/firebase';

const players = db.ref('players');

export function getRounds(name){
  
  return {
    type: LOAD_ROUNDS,
    payload: players.child(name).once('value').then(data => {
      const rounds = data.val();
      return Object.keys(rounds).map(key => {
        let round = rounds[key];
        round.key = key;
        return round;
      });
    }).then(arr => arr.sort(function(a, b){
      return a.date > b.date ? 1 : a.date < b.date ? -1 : 0;
    }))
  };
    
}

// this old get rounds function. did not sort by date, returned them in order entered
// export function getRounds(name){
//   return {
//     type: LOAD_ROUNDS,
//     payload: players.child(name).once('value').then(data => {
//       const rounds = data.val();
//       return Object.keys(rounds).map(key => {
//         let round = rounds[key];
//         round.key = key;
//         return round;
//       });
//     }
//     )
//   };
// }

export function getScoreAvg(name, stat, handler){
  if(name === '') return;
  players.child(name).once('value').then(data => {
    const rounds = data.val();
    const totalRounds = Object.keys(rounds).length;
    let totalScore = 0;
    Object.keys(rounds).map(key => {
      let round = rounds[key];
      let rdTotal = round[stat];
      totalScore = totalScore + rdTotal;
    });
    return handler(totalScore / totalRounds);
  });
}






