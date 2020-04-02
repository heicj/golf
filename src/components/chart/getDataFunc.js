import { db } from '../../services/firebase';
import { createGraphData } from './actions';

const players = db.ref('players');

export function getPlayerRounds(name, handler, datasetOptions){
  players.child(name).once('value').then(data => {
    const rounds = data.val();
    return  Object.keys(rounds).map(key => {
      let round = rounds[key];
      round.key = key;
      return round;
    });
  }).then(arr => {
    let sorted = arr.sort(function(a,b){
      return a.date > b.date ? 1 : a.date < b.date ? -1 : 0;
    });
    let graphData = createGraphData(sorted, datasetOptions);
    handler(name, graphData);
  });
}