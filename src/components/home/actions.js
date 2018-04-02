import { LOAD_ROUNDS, LOAD_SCORE_AVG } from './reducers';
import { db } from '../../services/firebase';

const players = db.ref('players');

export function getRounds(name){
  return {
    type: LOAD_ROUNDS,
    payload: players.child(name).once('value').then(data => {
      const rounds = data.val();
      console.log(rounds);
      return Object.keys(rounds).map(key => {
        let round = rounds[key];
        round.key = key;
        return round;
      });
    }
    )
  };
}

// export function getScoreAvg(name){
//   if(name === '') return;
//   return {
//     type: LOAD_SCORE_AVG,
//     payload: players.child(name).once('value').then(data => {
//       const rounds = data.val();
//       const totalRounds = Object.keys(rounds).length;
//       let totalScore = 0;
//       Object.keys(rounds).map(key => {
//         let round = rounds[key];
//         let scoreArray = round.totalScore;
//         totalScore = totalScore + scoreArray;
//       });
//       return totalScore / totalRounds;
//     })
//   };
// }

export function getScoreAvg(name){
  if(name === '') return;
  const totalScore = players.child(name).once('value').then(data => {
    const rounds = data.val();
    Object.keys(rounds).length;
    // let totalScore = 0;
    return Object.keys(rounds).map(key => {
      let round = rounds[key];
      let score = round.totalScore;
      return score;
    });
  
  });
  
}

const avg = getScoreAvg('Charlie');
console.log(avg);



