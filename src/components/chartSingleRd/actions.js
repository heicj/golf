import { createGraphData } from '../chart/actions';
import { db } from '../../services/firebase';

const players = db.ref('players');

//name and key are used to get single rd from firebase
//handler is used to set local state of ChartSingleRd component
//options is datasets options that can be used to customize view of 
//data on the chart.  options needs to be an array. example follows.
//needs to be in label order as below, FIR, GIR, PUTTS, SCORE
//options param is just passed on to createGraphData function

// [{ 'label': 'FIR',
//     'fill': false,
//     'lineTension': 0,
//     'backgroundColor': 'rgba(255, 0, 0, 20)',
//     'borderColor': 'rgba(255, 0, 0, 20)',
//   },
//   { 'label': 'GIR',
//     'fill': false,
//     'lineTension': 0,
//     'backgroundColor': 'rgba(0, 255, 0, 20)', 
//     'borderColor': 'rgba(0, 255, 0, 20)',
//   },
//   { 'label': 'Putts',
//     'fill': false,
//     'lineTension': 0,
//     'backgroundColor': 'rgba(0, 0, 255, 30)', 
//     'borderColor': 'rgba(0, 0, 255, 30)', 
//   },
//   { 'label': 'Score',
//     'fill': false,
//     'lineTension': 0,
//     'backgroundColor': 'rgba(50, 20, 60, 20)', 
//     'borderColor': 'rgba(50, 20, 60, 20)',
//   }
// ];

export function getSingleRdGraphData(name, key, handler, options){
  players.child(name).child(key).once('value').then(data => {
    let rd = data.val();
    let chartData = createGraphData([rd], options);
    handler([chartData, rd]);
  });
}