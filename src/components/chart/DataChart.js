import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { chartOptions } from './options';
// import LineGraph  from '../lineGraph/LineGraph'
import './chart.css';

export default class DataChart extends Component{

  state = {
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      datasets: [
        { label: 'FIR',
          backgroundColor:  'rgba(255, 0, 0, .2)',
          borderColor: 'rgba(255, 0, 0, 1)',
          fill: false,
          lineTension: 0,
          // data: [1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1 ,1, 1]
          data: [true, true, true, true, false, false, false, false, true, true, false, false, true, true, true, false, true, true]
        },
        { label: 'GIR',
          backgroundColor: 'rgba(0, 255, 0, .1)', 
          borderColor: 'rgba(0, 255, 0, 20)', 
          fill: false,
          lineTension: 0,
          // data: [1, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
          data: [true, true, false, false, false, false, true, true, false, false, false, true, true, false, false, true, true, true]
        },
        { label: 'Putts',
          backgroundColor: 'rgba(0, 0, 255, 30)', 
          borderColor: 'rgba(0, 0, 255, 30)', 
          fill: false,
          lineTension: 0,
          data: [2,3,3,1,1,2,2,2,3,2,1,1,2,0,2,2,2,2]
        },
        { label: 'Score',
          backgroundColor: 'rgba(50, 20, 60, 20)',
          lineTension: 0,
          borderColor: 'rgba(50, 20, 60, 20)',
          fill: false,
          data: [4,7,5,3,6,6,8,5,5,4,4,3,5,3,6,3,5,4]
        }
      ]
    },
    chartOptions
   
  };
  
  componentDidMount(){
  }

  render(){
    return (
      <section id='chartContainer'>
        <div>hello chart</div>
        <Line
          data={this.state.data}
          ref={this.chartReference}
          options={this.state.chartOptions}
        />
      </section>
    );
  }
}