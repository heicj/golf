import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { singleChartOptions, datasetOptions } from './options';
import { getSingleRdGraphData } from './actions';
import './singleChart.css';


class ChartSingleRd extends Component{
  state = {
    // data: {},
    singleChartOptions,
    datasetOptions
  }

  stateHandler = (obj) => {
    let stateDataObj = {};
    let key = 'data';
    stateDataObj[key] = obj;
    this.setState(stateDataObj);
  };

  componentDidMount(){
    this.props.getSingleRdGraphData(this.props.player, this.props.id, this.stateHandler, this.state.datasetOptions);
  }

  render(){
    return (
      <section>
        <div className='singleRdHeader'>{this.props.player}'s Round</div>
        <section className='singleRdGraphContainer'>

          { this.state.data ? 
            <Line 
              data={this.state.data}
              options={this.state.singleChartOptions}
            /> :
            null

          }
        </section>
      </section>
    );
  }
}

export default connect(
  (state, props) => ({
    player: props.match.params.player,
    id: props.match.params.id
  }),
  { getSingleRdGraphData }
)(ChartSingleRd)