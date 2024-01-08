//function returns 
// {
//   player: name,
//   firToGreen: correlation,
//   girToPutts: correlation 
// }

import { db } from '../../services/firebase';
import { pearsonCorrelation } from './pearsonCorrelation';
import { phiCorrelation } from './phiCorrelation';

const players = db.ref('players');


export const getPlayerCorrelations = (name, cb) => {
  let correlations = {};
  correlations.player = name;

  let FIRNumberArray = [];
  let FIRBoolArray = [];
  let GIRNumberArray = [];
  let GIRBoolArray = [];
  let PuttsNumberArray = [];
  
  players.child(name).once('value').then(data => {
    const rounds = data.val();
    return Object.keys(rounds).map(key => {
      let round = rounds[key];
      round.key = key;

      for(let i = 0; i < 18; i++){
        round.fir[i] == true ? FIRNumberArray.push(1) : FIRNumberArray.push(-1);
        FIRBoolArray.push(round.fir[i]);
        round.gir[i] == true ? GIRNumberArray.push(1) : GIRNumberArray.push(-1);
        GIRBoolArray.push(round.gir[i]);
        PuttsNumberArray.push(round.putts[i]);
      }
      return round;
    });
  }).then(arrOfRounds => {
    const firGirPhiCorrelation = phiCorrelation(FIRBoolArray, GIRBoolArray);
    const girPuttsPearsonCorrelation = pearsonCorrelation(GIRNumberArray, PuttsNumberArray);

    correlations.firGirPhiCorr = firGirPhiCorrelation;
    correlations.girPuttsPearsonCorrelation = girPuttsPearsonCorrelation;
    // console.log('fir gir', firGirPhiCorrelation);
    // console.log('gir putts', girPuttsPearsonCorrelation);
    // return correlations;

    cb(correlations);
   
  });


};


// +.70 or higher 	Very strong positive relationship
// +.40 to +.69 	Strong positive relationship
// +.30 to +.39 	Moderate positive relationship
// +.20 to +.29 	weak positive relationship
// +.01 to +.19 	No or negligible relationship
// 0 	No relationship
// -.01 to -.19 	No or negligible relationship
// -.20 to -.29 	weak negative relationship
// -.30 to -.39 	Moderate negative relationship
// -.40 to -.69 	Strong negative relationship
// -.70 or higher 	Very strong negative relationship