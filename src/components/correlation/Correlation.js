import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRoundsNoRedux } from '../home/actions';
import { getPlayerCorrelations } from './actions';

class Correlation extends Component{

  //I don't like this approach. need to do it with reducers and actions

  state = {
    'Charlie': {},
    'Jeremy': {}
  };

  componentDidMount(){
    getPlayerCorrelations('Charlie', this.handleState);
    getPlayerCorrelations('Jeremy', this.handleState);
    // console.log(charliecorr);
    // getRoundsNoRedux('Charlie', this.handleState);
    // getRoundsNoRedux('Jeremy', this.handleState);
  }

  handleState = (obj) => {
    let key = obj.player;
    let newObj = {};
    newObj[key] = obj;
    this.setState(newObj);
  };

  render(){
   const { Charlie, Jeremy } = this.state;
    return (
      <div>

        <div>{Charlie.player}</div>
        <div>{Charlie.firGirPhiCorr}</div>
        <div>{Charlie.girPuttsPearsonCorrelation}</div>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(Correlation);