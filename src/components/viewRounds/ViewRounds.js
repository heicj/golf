import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRounds } from '../home/actions';

class ViewRounds extends Component{

  componentDidMount(){
    const { name } = this.props;
    this.props.getRounds(name);
  }
  render(){
    return (
      <div>viewRounds</div>
    );
  }
}

export default connect(
  (state, props) => ({
    name: props.match.params.name
  }),
  { getRounds }
)(ViewRounds);