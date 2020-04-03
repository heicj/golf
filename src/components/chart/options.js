//sets options for charlies chart
//in dataChart component
export const charlieChartOptions = {
  responsive: true,
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Strokes',
        fontSize: 6
      },
      ticks: {
        // suggestedMin: 0,
        // suggestedMax: 10,
        fontSize: 6
      }
    }],
    xAxes:[{
      ticks: {
        fontSize: 4,
        maxRotation: 90
      }
    }]
  },
  title: {
    display: true,
    fontSize: 16,
    text: 'Charlie\'s Rounds'
  },
  legend: {
    position: 'top',
    labels: {
      fontSize: 6,
      boxWidth: 8
    }
  }
};

//sets options for jeremy's chart in
//datachart component
export const jeremyChartOptions = {
  responsive: true,
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Strokes',
        fontSize: 6
      },
      ticks: {
        // suggestedMin: 0,
        // suggestedMax: 10,
        fontSize: 6
      }
    }],
    xAxes:[{
      ticks: {
        fontSize: 4,
        maxRotation: 90
      }
    }]
  },
  title: {
    display: true,
    fontSize: 16,
    text: 'Jeremy\'s Rounds'
  },
  legend: {
    position: 'top',
    labels: {
      fontSize: 6,
      boxWidth: 8
    }
  }
};

//sets options for lines used in charlies
//chart in datachart component
export const charlieSetOptions = [
  { 'label': 'Charlie FIR',
    'fill': false,
    'lineTension': 0,
    'borderWidth': 1,
    'pointRadius': 1,
    'backgroundColor': 'rgba(255, 0, 0, 20)',
    'borderColor': 'rgba(255, 0, 0, 20)',
  },
  { 'label': 'Charlie GIR',
    'fill': false,
    'lineTension': 0,
    'borderWidth': 1,
    'pointRadius': 1,
    'backgroundColor': 'rgba(0, 255, 0, 20)', 
    'borderColor': 'rgba(0, 255, 0, 20)',
  },
  { 'label': 'Charlie Putts',
    'fill': false,
    'lineTension': 0,
    'borderWidth': 1,
    'pointRadius': 1,
    'backgroundColor': 'rgba(0, 0, 255, 30)', 
    'borderColor': 'rgba(0, 0, 255, 30)', 
  },
  { 'label': 'Charlie Score',
    'fill': false,
    'lineTension': 0,
    'borderWidth': 1,
    'pointRadius': 1,
    'backgroundColor': 'rgba(50, 20, 60, 20)', 
    'borderColor': 'rgba(50, 20, 60, 20)',
  }
];

//sets options for line styles for jeremy's chart
//used in datachart component
export const jeremySetOptions = [
  { 'label': 'Jeremy FIR',
    'fill': false,
    'lineTension': 0,
    'borderWidth': 1,
    'pointRadius': 1,
    'backgroundColor': 'rgba(255, 0, 0, 20)',
    'borderColor': 'rgba(255, 0, 0, 20)',
  },
  { 'label': 'Jeremy GIR',
    'fill': false,
    'lineTension': 0,
    'borderWidth': 1,
    'pointRadius': 1,
    'backgroundColor': 'rgba(0, 255, 0, 20)', 
    'borderColor': 'rgba(0, 255, 0, 20)',
  },
  { 'label': 'Jeremy Putts',
    'fill': false,
    'lineTension': 0,
    'borderWidth': 1,
    'pointRadius': 1,
    'backgroundColor': 'rgba(0, 0, 255, 30)', 
    'borderColor': 'rgba(0, 0, 255, 30)', 
  },
  { 'label': 'Jeremy Score',
    'fill': false,
    'lineTension': 0,
    'borderWidth': 1,
    'pointRadius': 1,
    'backgroundColor': 'rgba(50, 20, 60, 20)', 
    'borderColor': 'rgba(50, 20, 60, 20)',
  }
];