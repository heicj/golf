import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HoleForm from '../addRoundForm/HoleForm';
import TeeSelector from '../addRoundForm/TeeSelector';
// import { editRound, nextHole, teeSelection, holeScore, addRound, puttScore, toggleFir, toggleGir, calcFirGirTotal } from './actions';
import { getRoundById, editRound } from './actions';
import { rdDifferential } from '../addRoundForm/actions';
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
    this.setState({ 'totalFir': rd.totalFir });
    this.setState({ 'totalGir': rd.totalGir });
    this.setState({ 'totalPutts': rd.totalPutts });
    this.setState({ 'totalScore': rd.totalScore });

  }

  componentDidMount(){
    this.props.getRoundById(this.props.player, this.props.id, this.setStateHandler);
  }

  handleLocalState = ({ target }) => {
    this.setState({ [target.name ]: target.value });
  };

  handleSlope = ({ target }) => {
    let value = target.value == '' ? null : target.value;
    let diff = rdDifferential(this.state.totalScore, this.state.rating, value);
    this.setState({ 'slope': value });
    this.setState({ 'differential': diff });
  };

  handleRating = ({ target }) => {
    let value = target.value == '' ? null : target.value;
    let diff = rdDifferential(this.state.totalScore, value, this.state.slope);
    this.setState({ 'rating': value });
    this.setState({ 'differential': diff });
  };

  handleScoreChange = ({ target }) => {
    const name = target.name;
    const newValue = target.value == '' ? null : parseInt(target.value);
    
    let arr = this.state[name];
    let copy = arr.slice(0);
    copy.splice(target.id, 1, newValue);

    let stateObj = {};
    if(name == 'holesScore'){
      stateObj['totalScore'] = copy.reduce((a, c) => a + c, 0);
    } else {
      stateObj['totalPutts'] = copy.reduce((a, c) => a + c, 0);
    }
    stateObj[name] = copy;
    this.setState(stateObj);
  };


  handleFirGirCheckbox = ({ target }) => {
    const name = target.name;
    const value = target.selectedIndex == '0' ? true : false;

    let arr = this.state[name];
    let copy = arr.slice(0);
    copy.splice(target.id, 1, value);

    let reducedArr = copy.reduce((acc, curr) => curr === true ? acc + 1 : acc, 0);

    let stateObj = {};
    if(name == 'fir'){
      stateObj['totalFir'] = reducedArr;
    } else {
      stateObj['totalGir'] = reducedArr;
    }
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
    this.setState({});
  }
 

  render(){
    const { course, date, fir, gir, holesScore, player, putts, tee, totalFir, totalGir, totalPutts, totalScore, slope, rating } = this.state;
   
    return (
      <form className="roundForm" onSubmit={this.handleSubmit}>
        <h2 id='header'>Edit {player}'s Round</h2>

        <section id='rdMain'>
          <label htmlFor="course">
            Course: <input className='nameDate' name="course" type="text" onChange={this.handleLocalState} value={course}/>
          </label>&nbsp;
          <label htmlFor="date">
            Date: <input className='nameDate' type="date" name="date" onChange={this.handleLocalState} value={date}/>
          </label>&nbsp;
          <label htmlFor="tee">Tee: &nbsp;
            <select name="tee" value={tee} onChange={this.handleLocalState}>
              <option value="white">White</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="black">Black</option>
            </select>
          </label>
          <div id='slopeRating'>
            <label htmlFor="slope">
              Slope: <input name="slope" id="slope" type="text" onChange={this.handleSlope} value={slope}/>
            </label> &nbsp;
            <label htmlFor="rating">
              Rating: <input name="rating" id="rating" type="text" onChange={this.handleRating} value={rating}/>
            </label>
          </div>
        </section>
        <section id='rdSummary'>TOTALS
          <div>Score: {totalScore}</div>
          <div>Fir: {totalFir}</div>
          <div>Gir: {totalGir}</div>
          <div>Putts: {totalPutts}</div>
        </section>
        { holesScore && fir && gir && putts ?
          <section id='editRdStats'>
            <ul className='statUl'>Score
              {holesScore.map((h, i) => <div className='statDivs' key={i}><div>{ i + 1}</div> <input key={i} id={i} value={h} name='holesScore' onChange={this.handleScoreChange}></input></div>)}
            </ul>
            <ul className='statUl'>FIR
              {fir.map((f, i) => <div className='statDivs' key={i}><div>{ i + 1}</div> <select type='checkbox' checked key={i} id={i} value={f} name='fir' onChange={this.handleFirGirCheckbox}><option value='true'>true</option><option value='false'>false</option></select></div>)}
            </ul> 
            <ul className='statUl'>GIR
              {gir.map((g, i) => <div className='statDivs' key={i}><div>{ i + 1}</div> <select type='checkbox' key={i} id={i} value={g} name='gir' onChange={this.handleFirGirCheckbox}><option value='true'>true</option><option value='false'>false</option></select></div>)}
            </ul> 
            <ul className='statUl'>Putts
              {putts.map((p, i) => <div className='statDivs' key={i}><div>{ i + 1}</div> <input key={i} id={i} value={p} name='putts' onChange={this.handleScoreChange}></input></div>)}
            </ul> 
          </section> :
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