/*
data structure will be

data: {
  labels: []
  datasets: [
    { label: 'FIR'
      backgroundColor: 
      borderColor:
      data: []
    },
    { label: 'GIR'
      backgroundColor: 
      borderColor:
      data: []
    },
    { label: 'Putts'
      backgroundColor: 
      borderColor:
      data: []
    },
    { label: 'Score'
      backgroundColor: 
      borderColor:
      data: []
    }
  ]
}
get rounds for player.

*/

//make a function that takes an arr
//turns it into format that can be given to graph component.
//if array is one item aka just a round then it fills data arr
//with each hole info. if arr given to it contains many rounds
//then fills array with totals of each round.

export function createGraphData(arr){
  let sortedData = {};
  let singleRound;
  let labels = [];
  let fir = [];
  let gir = [];
  let putts = [];
  let score = [];

  arr.length == 1 ? singleRound = true : false;
  singleRound ? labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] : [];

  if(singleRound){
    //single round graph data graphs hole by hole data
    let round = arr[0];
    putts = round.putts;
    score = round.holeScore;
    //changes true/false values into 1 or 0 and adds to arrays
    for(let i = 0; i < round.fir.length; i++){
      let holeFir = round.fir[i] ? 1 : 0;
      let holeGir = round.gir[i] ? 1 : 0;
      fir.push(holeFir);
      gir.push(holeGir);
    }
  } else {
    //if setting graph data for multiple rounds then totals for each round are used
    for(let j = 0; j < arr.length; j++){
      let r = arr[j];
      let date = r.date.length > 1 ? r.date : 'NA';
      labels.push(date + ' ' + r.course);
      fir.push(r.totalFir);
      gir.push(r.totalGir);
      putts.push(r.totalPutts);
      score.push(r.totalScore);
    }
  }

  sortedData.labels = labels;
  sortedData.datasets = [
    { 'label': 'FIR',
      'fill': false,
      'backgroundColor': 'rgba(255, 0, 0, 20)',
      'borderColor': 'rgba(255, 0, 0, 20)',
      'data': fir
    },
    { 'label': 'GIR',
      'fill': false,
      'backgroundColor': 'rgba(0, 255, 0, 20)', 
      'borderColor': 'rgba(0, 255, 0, 20)',
      'data': gir
    },
    { 'label': 'Putts',
      'fill': false,
      'backgroundColor': 'rgba(0, 0, 255, 30)', 
      'borderColor': 'rgba(0, 0, 255, 30)', 
      'data': putts
    },
    { 'label': 'Score',
      'fill': false,
      'backgroundColor': 'rgba(50, 20, 60, 20)', 
      'borderColor': 'rgba(50, 20, 60, 20)',
      'data': score
    }
  ];
  
  return sortedData;
  
}