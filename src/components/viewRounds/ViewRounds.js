import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRounds } from '../home/actions';
import { deleteRd } from './actions';
import Round from '../round/Round';
// import excelFunc from '../../services/excelFunc';

class ViewRounds extends Component{

  componentDidMount(){
    const { name } = this.props;
    this.props.getRounds(name);
    
    window.scrollTo(0, 0);  
  }

  //commented out until I figure out excel4node build issue
  // handleClick(){
  //   excelFunc(this.props.rounds);
  // }

  render(){
    const { rounds, deleteRd, name } = this.props;
    return (
      <section>
        <h2>{this.props.name + "'s"} Rounds</h2>
        {/* need to fix excel4node build issue */}
        {/* <button onClick={this.handleClick}>download rounds</button> */}
        {rounds.reverse().map((r, i) => <Round name={name} deleteRound={deleteRd} key={i} id={r.key}  roundStats={r}/>)}
      </section>
    );
  }
}

export default connect(
  (state, props) => ({
    rounds: state.rounds,
    name: props.match.params.name
  }),
  { getRounds, deleteRd }
)(ViewRounds);