// import { db } from '../../services/firebase';

// const players = db.ref('players');

//fir gir putts holesScore are stat names for a round
//need func to take a round and putt the stat for each hole into
//array for the particular stat
// {
//   oneFir: []
//   oneGir: []
//   onePutts: []
//   oneScore: [],

//   through hole 18.
// }

function courseHoleAvg(objOfRounds){
  const holeNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen'];
  const stats = ['fir', 'gir', 'putts', 'holesScore'];
  let eachHoleStats = {};
  const numberOfRounds = Object.keys(objOfRounds).length;
  let currRoundCount = 0;

  Object.keys(objOfRounds).reduce((a, c) => {
    let currentRd = objOfRounds[c];
    let currName = currentRd.course.toLowerCase();
    if(!eachHoleStats.hasOwnProperty(currName)){
      eachHoleStats[currName] = {};
      stats.forEach((stat) => {
        for(let i = 0; i < holeNumbers.length; i++){
          eachHoleStats[currName][holeNumbers[i] + stat] = [currentRd[stat][i]]
        }
      });
      currRoundCount++;
    } else {
      stats.forEach((stat) => {
        for(let i = 0; i < holeNumbers.length; i++){
          eachHoleStats[currName][holeNumbers[i] + stat].push(currentRd[stat][i]);
        }
      });
      currRoundCount++;
    }
  }, eachHoleStats);

  if(currRoundCount == numberOfRounds){
    Object.keys(eachHoleStats).map(name => {
      let course = eachHoleStats[name];
      Object.keys(course).map(stat => {
        let statArray = course[stat];
        let statTotal = statArray.reduce((a, c) => a += c);
        let num = statArray.length;
        eachHoleStats[name][stat + 'avg'] = (statTotal / num);
      });
    });
  }
  return eachHoleStats;
}


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
export const courseHoleAverage = courseHoleAvg;