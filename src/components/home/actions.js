import { LOAD_ROUNDS, LOAD_SCORE_AVG } from './reducers';
import { LOAD_START, LOAD_END } from '../app/reducers'
import { db } from '../../services/firebase';
import { handicap } from '../../services/handicapFunc';

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
      return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
    }))
  };
    
}

// <----------

//this getRoundsFunction when used in the action function getRounds 
//causes the middleware to dispatch a load_start and load_end reducer
//this way I can incorporate a loading screen
// const getRoundsFunction = function(name){
//   return players.child(name).once('value').then(data => {
//     const rounds = data.val();
//     return Object.keys(rounds).map(key => {
//       let round = rounds[key];
//       round.key = key;
//       return round;
//     });
//   }).then(arr => arr.sort(function(a, b){
//     return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
//   }))
// }

// export function getRounds(name){
//   return {
//     type: LOAD_ROUNDS,
//     payload: getRoundsFunction(name)
//   }
// }

// --------->


// export function getScoreAvg(name, stat, handler){
//   if(name === '') return;
//   players.child(name).once('value').then(data => {
//     const rounds = data.val();
//     const totalRounds = Object.keys(rounds).length;
//     let totalScore = 0;
//     Object.keys(rounds).map(key => {
//       let round = rounds[key];
//       let rdTotal = round[stat];
//       totalScore = totalScore + rdTotal;
//     });
//     return handler(totalScore / totalRounds);
//   });
// }

// export function getMinMax(name, stat, minMax, handler){
//   if(name === '') return;
//   if(minMax == 'min'){
//     players.child(name).once('value').then(data => {
//       const rounds = data.val();
//       let lowScore = 0;
//       let counter = 1;
  
//       Object.keys(rounds).map(key => {
//         let round = rounds[key];
//         if(counter == 1) lowScore = round[stat];
//         if(round[stat] < lowScore) lowScore = round[stat];
//         counter++;
//       });
//       return handler(lowScore);
//     });
//   }
//   if(minMax == 'max'){
//     players.child(name).once('value').then(data => {
//       const rounds = data.val();
//       let highScore = 0;
//       let counter = 1;
  
//       Object.keys(rounds).map(key => {
//         let round = rounds[key];
//         if(counter == 1) highScore = round[stat];
//         if(round[stat] > highScore) highScore = round[stat];
//         counter++;
//       });
//       return handler(highScore);
//     });
//   }
// }

export function getStats(name, handler){
  dispatch => { type: LOAD_START }
  players.child(name).once('value').then(data => {
    const rounds = data.val();
    let avgScore, avgFir, avgGir, avgPutts, highScore, highFir, highGir, highPutts, lowScore, lowFir, lowGir, lowPutts, totalScore = 0, totalFir = 0, totalGir = 0, totalPutts = 0;
   
    let counter = 1;
    const totalRounds = Object.keys(rounds).length;
    Object.keys(rounds).forEach(key => {
      let round = rounds[key];
      if(counter == 1){
        highScore = round.totalScore;
        highFir = round.totalFir;
        highGir = round.totalGir;
        highPutts = round.totalPutts;
        lowScore = round.totalScore;
        lowFir = round.totalFir;
        lowGir = round.totalGir;
        lowPutts = round.totalPutts;
        totalScore += round.totalScore;
        totalFir += round.totalFir;
        totalGir += round.totalGir;
        totalPutts += round.totalPutts;
        counter++;
      } else {
        if(round.totalScore > highScore) highScore = round.totalScore;
        if(round.totalFir > highFir) highFir = round.totalFir;
        if(round.totalGir > highGir) highGir = round.totalGir;
        if(round.totalPutts > highPutts) highPutts = round.totalPutts;

        if(round.totalScore < lowScore) lowScore = round.totalScore;
        if(round.totalFir < lowFir) lowFir = round.totalFir;
        if(round.totalGir < lowGir) lowGir = round.totalGir;
        if(round.totalPutts < lowPutts) lowPutts = round.totalPutts;

        totalScore += round.totalScore;
        totalFir += round.totalFir;
        totalGir += round.totalGir;
        totalPutts += round.totalPutts;
      } 
    });
    avgScore = (totalScore / totalRounds).toFixed(2);
    avgFir = (totalFir / totalRounds).toFixed(2);
    avgGir = (totalGir / totalRounds).toFixed(2);
    avgPutts = (totalPutts / totalRounds).toFixed(2);
    const playerHandicap = handicap(rounds);
    let stats = [
      { 'AvgScore': avgScore }, { 'FirAvg': avgFir }, { 'GirAvg': avgGir }, { 'PuttsAvg': avgPutts },
      { 'HighScore': highScore }, { 'HighFir': highFir }, { 'HighGir': highGir }, { 'HighPutts': highPutts },
      { 'LowScore': lowScore }, { 'LowFir': lowFir }, { 'LowGir': lowGir }, { 'LowPutts': lowPutts }, { 'TotalRounds': totalRounds }, { 'handicap': playerHandicap }
    ];

    dispatch => { type: LOAD_END }
    return handler(stats);
  });
}


export function getAveragesLastFiveRounds(name){
  players.child(name).once('value').then(data => {
    let score = 0, fir = 0, gir = 0, putts = 0, avgScore, avgFir, avgGir, avgPutts;

    let playersRounds = data.val();
    let numberOfRounds = Object.keys(playersRounds).length;
    let keysOfLastFiveRounds = Object.keys(playersRounds).slice(numberOfRounds - 5);

    for(let i = 0; i < keysOfLastFiveRounds.length; i++){
      let round = playersRounds[keysOfLastFiveRounds[i]];
      score += round.totalScore;
      fir += round.totalFir;
      gir += round.totalGir;
      putts += round.totalPutts;
    }

    avgScore = score / 5;
    avgFir = fir / 5;
    avgGir = gir / 5;
    avgPutts = putts / 5;

    let lastFiveAverages = {};

    lastFiveAverages.avgScore = avgScore;
    lastFiveAverages.avgFir = avgFir;
    lastFiveAverages.avgGir = avgGir;
    lastFiveAverages.avgPutts = avgPutts;

    console.log(lastFiveAverages);
  });
}

