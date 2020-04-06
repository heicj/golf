import { db } from '../../services/firebase';

const players = db.ref('players');

//function that returns averages for each course
//1.one parameter is obj of rounds -> obj of rounds is what firebase returns
//2. have initial obj for results
//  {
//    courseName:  {fir:[], gir:[], putts: [], score:[]}
// }

//3. check if obj has current course in it.
      //if it doesn't 
      //  add the course to the obj with the total fir, gir, putts, score 
      //if it does
        //push the value of curr rd into the arr for each stat
//4. return obj

function courseSortedStats(objOfRounds){
  let sortedObj = {};
  Object.keys(objOfRounds).reduce((a, c) => {
    let currentRd = objOfRounds[c];
    let currentName = currentRd.course.toLowerCase();
    if(!sortedObj.hasOwnProperty(currentName)){
      sortedObj[currentName] = {
        'fir': [currentRd.totalFir],
        'gir': [currentRd.totalGir],
        'putts': [currentRd.totalPutts],
        'score': [currentRd.totalScore],
      };
    } else {
      sortedObj[currentName].fir.push(currentRd.totalFir);
      sortedObj[currentName].gir.push(currentRd.totalGir);
      sortedObj[currentName].putts.push(currentRd.totalPutts);
      sortedObj[currentName].score.push(currentRd.totalScore);
    }
  }, sortedObj);

  return sortedObj;
}

//takes name of player to get rounds for.
//handler is used to set local state in component
export function getCourseAvg(name, handler){
  players.child(name).once('value').then(data => {
    const rounds = data.val();
    const reducedData = courseSortedStats(rounds);
    handler(name, reducedData);
  });
}

export const courseSortedStatsFunc = courseSortedStats;
