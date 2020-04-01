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
    fontSize: 16,
    // text: 'Round'
  },
  legend: {
    position: 'top'
  }
};