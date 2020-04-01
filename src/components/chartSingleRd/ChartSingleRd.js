import React, { Component } from 'react';
import { singleChartOptions } from './options';
import { getSingleRdGraphData } from './actions';

import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';

class ChartSingleRd extends Component{
  state = {
    // data: {},
    singleChartOptions
  }

  stateHandler = (obj) => {
    let stateDataObj = {};
    let key = 'data';
    stateDataObj[key] = obj;
    this.setState(stateDataObj);
  };

  componentDidMount(){
    this.props.getSingleRdGraphData(this.props.player, this.props.id, this.stateHandler);
  }

  render(){
    return (
      <section>

        <div>hello</div>
        { this.state.data ? 
          <Line 
            data={this.state.data}
            options={this.state.singleChartOptions}
          /> :
          null

        }
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