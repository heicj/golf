import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRounds } from '../home/actions';
import { deleteRd, changeName } from './actions';
import Round from '../round/Round';
import './viewrounds.css';
import { excelFunc } from '../../services/excelFunc';

class ViewRounds extends Component{

  componentDidMount(){
    const { name } = this.props;
    this.props.changeName(name);
    this.props.getRounds(name);
    window.scrollTo(0, 0);  
  }
  
  componentDidUpdate(prevProps, prevState){
    if(prevProps.name !== this.props.name){
      this.props.changeName(this.props.name);
      this.props.getRounds(this.props.name);
    }
  }

 

  // commented out until I figure out excel4node build issue
  handleClick =() => {
    let rounds = this.props.rounds;
    this.props.excelFunc(rounds);
  }

  render(){
    const { rounds, deleteRd, name } = this.props;
    return (
      <section>
        <h2 id="playerH2">{this.props.name + "'s"} Rounds</h2>
        {/* need to fix excel4node build issue */}
        {/* <button onClick={this.handleClick}>download rounds</button> */}
        {rounds.map((r, i) => <Round name={name}  deleteRound={deleteRd} key={i} id={r.key}  roundStats={r}/>)}
      </section>
    );
  }
}

export default connect(
  (state, props) => ({
    rounds: state.rounds,
    name: props.match.params.name
  }),
  { getRounds, deleteRd, changeName, excelFunc }
)(ViewRounds);