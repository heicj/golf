import React, { PureComponent } from 'react'
import Chart from 'chart.js';
// import classes from './LineGraph.module.css';
let myLineChart;


//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = '\'PT Sans\', sans-serif'
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class LineGraph extends PureComponent {
  
  // chartRef = React.createRef();
  
  componentDidMount() {
    this.buildChart();
    }

    componentDidUpdate() {
      this.buildChart();
    }

    buildChart = () => {
      console.log(this.props)
      const myChartRef = this.props.ref.current.getContext('2d');
      // const { data } = this.props;

      if(typeof myLineChart !== 'undefined') myLineChart.destroy();

      myLineChart = new Chart(myChartRef, {
        type: 'line',
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
          }]
        },
        options: {
                //Customize chart options
        }
      });

    }

    render() {

      return (
        <div>
          <canvas
            id="myChart"
            // ref={this.chartRef}
          />
        </div>
      )
    }
}