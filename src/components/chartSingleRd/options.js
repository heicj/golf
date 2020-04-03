//this sets options/styling for chart. used in chartSingeRd component
export const singleChartOptions = {
  responsive: true,
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Strokes',
        fontSize: 7
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 2,
        fontSize: 6
      }
    }],
    xAxes:[{
      scaleLabel: {
        display: true,
        labelString: 'Hole',
        fontSize: 10
      },
      ticks: {
        fontSize: 8,
        maxRotation: 90,
      }
    }]
  },
  title: {
    display: false,
    fontSize: 12,
    // text: 'Round'
  },
  legend: {
    position: 'top',
    labels: {
      fontSize: 8,
      boxWidth: 5
    }
  }
};

//this is used to set the options for the lines used by
//the graph in chartsinglerd component
export const datasetOptions = [
  { 'label': 'FIR',
    'fill': false,
    'lineTension': 0,
    'borderWidth': 1,
    'pointRadius': 2,
    'backgroundColor': 'rgba(255, 0, 0, 20)',
    'borderColor': 'rgba(255, 0, 0, 20)',
  },
  { 'label': 'GIR',
    'fill': false,
    'lineTension': 0,
    'borderWidth': 1,
    'pointRadius': 2,
    'backgroundColor': 'rgba(0, 255, 0, 20)', 
    'borderColor': 'rgba(0, 255, 0, 20)',
  },
  { 'label': 'Putts',
    'fill': false,
    'lineTension': 0,
    'borderWidth': 1,
    'pointRadius': 2,
    'backgroundColor': 'rgba(0, 0, 255, 30)', 
    'borderColor': 'rgba(0, 0, 255, 30)', 
  },
  { 'label': 'Score',
    'fill': false,
    'lineTension': 0,
    'borderWidth': 1,
    'pointRadius': 2,
    'backgroundColor': 'rgba(50, 20, 60, 20)', 
    'borderColor': 'rgba(50, 20, 60, 20)',
  }
];