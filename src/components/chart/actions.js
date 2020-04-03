//datasetOptions param for createGraphData function
//is array structured as below in the order of FIR, GIR, PUTTS, SCore
//these are the options to customize chart dataset view

/*

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
*/


export function createGraphData(arr, datasetOptions){
  let sortedData = {};
  let singleRound;
  let labels = [];
  let fir = [];
  let gir = [];
  let putts = [];
  let score = [];
  let datasets = [];

  arr.length == 1 ? singleRound = true : false;
  singleRound ? labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] : [];

  if(singleRound){
    //single round graph data graphs hole by hole data
    let round = arr[0];
    putts = round.putts;
    score = round.holesScore;
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
  for(let k = 0; k < datasetOptions.length; k++){
    let options = datasetOptions[k];
    if(k == 0) {
      options.data = fir;
      datasets.push(options);
    }
    if(k == 1) {
      options.data = gir;
      datasets.push(options);
    }
    if(k == 2){
      options.data = putts;
      datasets.push(options);
    }
    if(k == 3){
      options.data = score;
      datasets.push(options);
    } 
  }
  
  sortedData.datasets = datasets;
  
  return sortedData;
  
}