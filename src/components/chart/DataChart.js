import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './chart.css';

export default class DataChart extends Component{

  componentWillMount(){
   
  }

  state = {
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
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