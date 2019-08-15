import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HoleForm from '../addRoundForm/HoleForm';
import TeeSelector from '../addRoundForm/TeeSelector';
// import { editRound, nextHole, teeSelection, holeScore, addRound, puttScore, toggleFir, toggleGir, calcFirGirTotal } from './actions';
import { getRoundById, editRound } from './actions';
import './editForm.css';

class EditForm extends PureComponent{

  state = {
    // player: this.props.singleRound.name,
    // course: this.props.singleRound.course,
    // date: this.props.singleRound.date,
    // tee: this.props.singleRound.tee,
    // fir: this.props.singleRound.fir,
    // gir: this.props.singleRound.gir,
    // holesScore: this.props.singleRound.holesScore,
    // putts: this.props.singleRound.putts,
    // totalFir: this.props.singleRound.totalFir,
    // totalGir: this.props.singleRound.totalGir,
    // totalPutts: this.props.singleRound.totolPutts,
    // totalScore: this.props.singleRound.totalScore
  };

  setStateHandler = (rd) => {
    Object.keys(rd).forEach(stat => {
      let stateObj = {};
      stateObj[stat] = rd[stat];
      this.setState(stateObj);
    });
  }

  componentDidMount(){
    this.props.getRoundById(this.props.player, this.props.id, this.setStateHandler);
  }

  handleLocalState = ({ target }) => {
    this.setState({ [target.name ]: target.value });
  };

  handleScoreChange = ({ target }) => {
    const name = target.name;
    const newValue = target.value == '' ? null : parseInt(target.value);
    
    let arr = this.state[name];
    let copy = arr.slice(0);
    copy.splice(target.id, 1, newValue);

    let stateObj = {};
    stateObj[name] = copy;
    this.setState(stateObj);
  };

  handleChange = ({ target }) => {
    const id = Number(target.id);
    const value = Number(target.value);
    if(target.name.includes('score')){
      this.props.holeScore({ id: id, value: value });
    } else if(target.name.includes('putts')){
      this.props.puttScore({ id: id, value: value });
    }
    
  };

  handleFirGirCheckbox = ({ target }) => {
    const name = target.name;
    const value = target.checked;

    let arr = this.state[name];
    let copy = arr.slice(0);
    copy.splice(target.id, 1, value);

    let stateObj = {};
    stateObj[name] = copy;
    this.setState(stateObj);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const rdId = this.props.id;
    const name = this.props.player;
    const stats = this.state;

    this.props.editRound(name, rdId, stats);
    this.props.history.push(`/rounds/${name}`);
  }
 

  render(){
    const { course, date, fir, gir, holesScore, player, putts, tee, totalFir, totalGir, totalPutts, totalScore } = this.state;
   
    return (
      <form className="roundForm" onSubmit={this.handleSubmit}>
        <h2>Edit {player}'s Round</h2>
        <section>
          <label htmlFor="course">
            Course:<input name="course" type="text" onChange={this.handleLocalState} value={course}/>
          </label>
          <label htmlFor="date">
            Date:<input type="date" name="date" onChange={this.handleLocalState} value={date}/>
          </label>

          <label htmlFor="tee">
            <TeeSelector value={this.state.tee} selectChange={this.handleLocalState}/>
          </label>
        </section>
        { holesScore ?
          <ul>Score
            {holesScore.map((h, i) => <div key={i}>{ i + 1}<input key={i} id={i} value={h} name='holesScore' onChange={this.handleScoreChange}></input></div>)}
          </ul> : 
          null
        }
        {
          fir ?
            <ul>FIR
              {fir.map((f, i) => <div key={i}>{ i + 1}<input type='checkbox' key={i} id={i} value={f} name='fir' onChange={this.handleFirGirCheckbox}></input></div>)}
            </ul> :
            null
        }
        {  gir ?
          <ul>GIR
            {gir.map((g, i) => <div key={i}>{ i + 1}<input type='checkbox' key={i} id={i} value={g} name='gir' onChange={this.handleFirGirCheckbox}></input></div>)}
          </ul> :
          null
        }
        {
          putts ? 
            <ul>Putts
              {putts.map((p, i) => <div key={i}>{ i + 1}<input key={i} id={i} value={p} name='putts' onChange={this.handleScoreChange}></input></div>)}
            </ul> :
            null
        }
        <button>Submit</button>
        
      </form>
    );
  }
}

export default withRouter(connect(
  (state, props) => ({ 
    singleRound: state.singleRound,
    player: props.match.params.player,
    id: props.match.params.id
  }),
  { getRoundById, editRound }
)(EditForm));