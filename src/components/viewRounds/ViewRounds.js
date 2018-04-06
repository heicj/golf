import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRounds } from '../home/actions';
import Round from '../round/Round';

class ViewRounds extends Component{

  componentDidMount(){
    const { name } = this.props;
    this.props.getRounds(name);
  }
  render(){
    const { rounds } = this.props;
    return (
      <section>
        <h2>{this.props.name}'s Rounds</h2>
        {rounds.map((r, i) => <Round key={i} id={r.key}  roundStats={r}/>)}
      </section>
    );
  }
}

export default connect(
  (state, props) => ({
    rounds: state.rounds,
    name: props.match.params.name
  }),
  { getRounds }
)(ViewRounds);