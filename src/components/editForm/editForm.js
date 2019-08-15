import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import HoleForm from '../addRoundForm/HoleForm';
import TeeSelector from '../addRoundForm/TeeSelector';
import { nextHole, teeSelection, holeScore, addRound, puttScore, toggleFir, toggleGir, calcFirGirTotal } from './actions';
import { getRoundById } from './actions';
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
    let newValue = target.value == '' ? null : parseInt(target.value);
    let scoreArray = this.state.holesScore;
    let scoreCopy = scoreArray.slice(0);
    scoreCopy.splice(target.id, 1, newValue);
    this.setState({ 'holesScore': scoreCopy });
  }
  
  handleChange = ({ target }) => {
    // this.setState({ [target.name ]: target.value });
    const id = Number(target.id);
    const value = Number(target.value);
    if(target.name.includes('score')){
      this.props.holeScore({ id: id, value: value });
    } else if(target.name.includes('putts')){
      this.props.puttScore({ id: id, value: value });
    }
    
  };

  handleCheckbox = ({ target }) => {
    const id = Number(target.id);
    if(target.name.includes('fir')){
      this.props.toggleFir(id);
    } else if(target.name.includes('gir')){
      this.props.toggleGir(id);
    }
  };
  // handleNext = () => {
  //   this.props.nextHole();
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.addRound(this.state);
  // };

  

  render(){
    const { course, date, fir, gir, holesScore, player, putts, tee, totalFir, totalGir, totalPutts, totalScore } = this.state;
   
    // const totFir = calcFirGirTotal(fir);
    // const totGir = calcFirGirTotal(gir);
    // const totScore = rdScore.reduce((acc, curr) => acc + curr, 0);
    // const totPutts = putts.reduce((acc, curr) => acc + curr, 0);
    // const totFir = fir.reduce((acc, curr) => curr === true ? acc + 1 : acc, 0);
    const round = Array(18).fill('');
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
          <ul> Score
            {holesScore.map((h, i) => <input key={i} id={i} value={h} onChange={this.handleScoreChange}></input>)}
          </ul> : null
        }
        {/* <section>
          {round.map((h, i) => <HoleForm key={i} id={i} name={`${i}`} onSelect={this.handleChange} checkbox={this.handleCheckbox}/>)}
        </section> */}
        <button>Submit</button>
        
      </form>
    );
  }
}

export default connect(
  (state, props) => ({ 
    singleRound: state.singleRound,
    player: props.match.params.player,
    id: props.match.params.id
  }),
  { getRoundById }
)(EditForm);