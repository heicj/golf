import { createGraphData } from '../chart/actions';
import { db } from '../../services/firebase';

const players = db.ref('players');

export function getSingleRdGraphData(name, key, handler){
  players.child(name).child(key).once('value').then(data => {
    let rd = data.val();
    let chartData = createGraphData([rd]);
    handler(chartData);
  });
}