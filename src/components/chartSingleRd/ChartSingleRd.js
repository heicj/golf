import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { singleChartOptions, datasetOptions } from './options';
import { getSingleRdGraphData } from './actions';
import Selector from '../selector/Selector';
import './singleChart.css';


class ChartSingleRd extends Component{
  state = {
    // data: {},
    singleChartOptions,
    datasetOptions,
    selectorChoice: 'ALL'
  }

  stateHandler = (obj) => {
    let stateDataObj = {};
    let key = 'data';
    stateDataObj[key] = obj;
    this.setState(stateDataObj);
  };

  selectorHandler = ({ target }) => {
    this.setState({ [target.name ]: target.value });
  }

  componentDidMount(){
    this.props.getSingleRdGraphData(this.props.player, this.props.id, this.stateHandler, this.state.datasetOptions);
  }

  render(){
    const { selectorChoice } = this.state;
    return (
      <section>
        <div className='singleRdHeader'>{this.props.player}'s Round</div>
        <section className='singleRdGraphContainer'>
          <div id='selectorContainer'>
            <Selector
              allValue="ALL"
              firValue="FIR"
              girValue="GIR"
              puttsValue="Putts"
              scoreValue="Score"
              value={selectorChoice} 
              name='selectorChoice' 
              onSelect={this.selectorHandler}
            />
          </div>
          { this.state.data ? 
            <Line 
              data={() => {
                let copy = {};
                Object.assign(copy, this.state.data);
                let ds = copy.datasets;
                if(selectorChoice == 'ALL') {
                  return copy;
                } else {
                  copy.datasets = ds.filter((s) => {
                    return s.label == selectorChoice;
                  });
                  return copy;
                }
              }}
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