import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './chart.css';

export default class DataChart extends Component{

  componentWillMount(){
   
  }

  state = {
    // data: {
    //   labels: ["January", "February", "March", "April", "May", "June", "July"],
    //   datasets: [
    //     {
    //       label: 'second dataset',
    //       backgroundColor: 'rgb(50, 50, 50)',
    //       borderColor: 'rgb(10,10,10)',
    //       data: [10, 2, 30, 4, 5, 6, 20]
    //     },
    //     {
    //     label: "My First dataset",
    //     backgroundColor: 'rgb(255, 99, 132)',
    //     borderColor: 'rgb(255, 99, 132)',
    //     data: [0, 10, 5, 2, 20, 30, 45],
    //   }]
    // }
    data: {
      labels: ['3-31-2020 chehalem glenn', '7-2-2020 old macdonald'],
      datasets: [
        { label: 'FIR',
          backgroundColor:  'rgba(10, 20, 30, 20)',
          borderColor: 'rgba(10, 20, 30, 20)',
          data: [10, 8]
        },
        { label: 'GIR',
          backgroundColor: 'rgba(15, 25, 35, 25)', 
          borderColor: 'rgba(15, 25, 35, 25)', 
          data: [1, 2]
        },
        { label: 'Putts',
          backgroundColor: 'rgba(20, 25, 40, 30)', 
          borderColor: 'rgba(20, 25, 40, 30)', 
          data: [36, 38]
        },
        { label: 'Score',
          backgroundColor: 'rgba(50, 20, 60, 20)',
          borderColor: 'rgba(50, 20, 60, 20)',
          data: [72, 71]
        }
      ]
    }
  }
  render(){
    return (
      <section id='chartContainer'>
        <div>hello chart</div>
        <Line 
          data={this.state.data}
        />
      </section>
    );
  }
}