import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRounds } from '../home/actions';
import { deleteRd, changeName } from './actions';
import Round from '../round/Round';
import './viewrounds.css';
import { excelFunc } from '../../services/excelFunc';

class ViewRounds extends Component{

  state = {
    page: 1
  }
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

  handleClick = () => {
    let rounds = this.props.rounds;
    this.props.excelFunc(rounds);
  }

  handlePaging = ({ target }) => {

    let name = target.id;
    let page = this.state.page;
    let maxPage = Math.ceil(this.props.rounds.length / 10);
    if(name == 'minus'){
      if(page <= 1) return;
      let newPage = page - 1;
      this.setState({ 'page': newPage });
    }
    if(name == 'plus'){
      if(page == maxPage ) return;
      let newPage = page + 1;
      this.setState({ 'page': newPage });
    }
  }

  render(){
    const { rounds, deleteRd, name } = this.props;
    return (
      <section>
        <div name='minus' id='minus' onClick={this.handlePaging}>PgDw</div><div>{this.state.page}</div><div name='plus' id='plus' onClick={this.handlePaging}>PdUp</div>
        <h2 id="playerH2">{this.props.name + "'s"} Rounds</h2>
        <div id="buttonDiv">
          <button onClick={this.handleClick}>DOWNLOAD {name}'s ROUNDS</button>
        </div>
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