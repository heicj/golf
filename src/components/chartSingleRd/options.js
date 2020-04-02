export const singleChartOptions = {
  responsive: true,
  scales: {
    yAxes: [{
      ticks: {
        suggestedMin: 0,
        suggestedMax: 10
      }
    }],
    xAxes:[{
      ticks: {
        fontSize: 8,
        maxRotation: 90
      }
    }]
  },
  title: {
    display: true,
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

export const datasetOptions = [
  { 'label': 'FIR',
    'fill': false,
    'lineTension': 0,
    'backgroundColor': 'rgba(255, 0, 0, 20)',
    'borderColor': 'rgba(255, 0, 0, 20)',
  },
  { 'label': 'GIR',
    'fill': false,
    'lineTension': 0,
    'backgroundColor': 'rgba(0, 255, 0, 20)', 
    'borderColor': 'rgba(0, 255, 0, 20)',
  },
  { 'label': 'Putts',
    'fill': false,
    'lineTension': 0,
    'backgroundColor': 'rgba(0, 0, 255, 30)', 
    'borderColor': 'rgba(0, 0, 255, 30)', 
  },
  { 'label': 'Score',
    'fill': false,
    'lineTension': 0,
    'backgroundColor': 'rgba(50, 20, 60, 20)', 
    'borderColor': 'rgba(50, 20, 60, 20)',
  }
];