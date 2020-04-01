import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { charlieChartOptions, jeremyChartOptions } from './options';
// import LineGraph  from '../lineGraph/LineGraph'
import { getPlayerRounds } from './getDataFunc';
import './chart.css';

export default class DataChart extends Component{

  state = {
    // data: {
    //   labels: ['3-31-2020 chehalem glenn', '7-2-2020 old macdonald'],
    //   datasets: [
    //     { label: 'FIR',
    //       backgroundColor:  'rgba(10, 20, 30, 20)',
    //       borderColor: 'rgba(255, 0, 0, 1)',
    //       fill: false,
    //       data: [10, 8]
    //     },
    //     { label: 'GIR',
    //       backgroundColor: 'rgba(15, 25, 35, 25)', 
    //       borderColor: 'rgba(0, 255, 0, 1)', 
    //       fill: false,
    //       data: [1, 2]
    //     },
    //     { label: 'Putts',
    //       backgroundColor: 'rgba(20, 25, 40, 30)', 
    //       borderColor: 'rgba(0, 0, 255, 1)', 
    //       fill: false,
    //       data: [36, 38]
    //     },
    //     { label: 'Score',
    //       backgroundColor: 'rgba(50, 20, 60, 20)',
    //       borderColor: 'rgba(50, 50, 0, 1)',
    //       fill: false,
    //       data: [72, 71]
    //     }
    //   ]
    // },
    charlieChartOptions,
    jeremyChartOptions
   
  };
  
  handlePlayerState = (name, obj) => {
    let stateDataObj = {};
    let key = name + 'Data';
    stateDataObj[key] = obj;
    this.setState(stateDataObj);
  };

  componentDidMount(){
    getPlayerRounds('Charlie', this.handlePlayerState);
    getPlayerRounds('Jeremy', this.handlePlayerState);
  }




  render(){
    return (
      <section id='chartContainer'>
        <div>hello chart</div>
        {
          this.state.CharlieData ? 
            <Line
              data={this.state.CharlieData}
              ref={this.chartReference}
              options={this.state.charlieChartOptions}
            /> :
            null
        }
        {
          this.state.JeremyData ?
            <Line 
              data={this.state.JeremyData}
              options={this.state.jeremyChartOptions}
            /> :
            null
        }
      </section>
    );
  }
}