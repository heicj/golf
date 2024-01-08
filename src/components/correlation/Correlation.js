import React, { Component } from 'react';
import { connect } from 'react-redux';
import CorrelationRelationshipDisplay from '../correlationRelationshipDisplay/CorrelationRelationshipDisplay';
import CorrelationRanges from '../correlationRanges/CorrelationRanges';
import { getRoundsNoRedux } from '../home/actions';
import { getPlayerCorrelations } from './actions';
import './correlation.css';

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
      <section id='correlation-main-section'>
        <div>
          <CorrelationRelationshipDisplay playerCorrelations={Charlie}/>
          <CorrelationRelationshipDisplay playerCorrelations={Jeremy}/>
        </div>
        <div>
          <CorrelationRanges/>
        </div>
      </section>
    );
  }
}

export default connect(
  null,
  {}
)(Correlation);