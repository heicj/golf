import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { allData } from '../coursesPlayed/actions';
import HoleForm from './HoleForm';
import TeeSelector from './TeeSelector';
import { nextHole, teeSelection, holeScore, resetHoleScore, addRound, puttScore, puttReset, toggleFir, firReset, toggleGir, girReset, calcFirGirTotal } from './actions';
import './addRoundForm.css';


class AddRoundForm extends PureComponent{

  componentDidMount(){
    this.props.allData();
  }

  state = {
    player: this.props.name,
    course: '',
    slope: '',
    rating: '',
    date: '',
    tee: 'white',
    comment: ''
  };

  handleLocalState = ({ target }) => {
    this.setState({ [target.name ]: target.value });
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

  handleCheckbox = ({ target }) => {
    const id = Number(target.id);
    if(target.name.includes('fir')){
      this.props.toggleFir(id);
    } else if(target.name.includes('gir')){
      this.props.toggleGir(id);
    }
  };
  handleNext = () => {
    this.props.nextHole();
  };

  count = (arr) => {
    let total = 0;
    for(let i = 0; i < arr. length; i++){
      if(arr[i] == true) total += 1;
    }
    return total;
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let score = this.props.rdScore.reduce(function(a, b){
      return a + b; }, 0);
    let putts = this.props.putts.reduce(function(a, b){
      return a + b;}, 0);
    let firs = this.count(this.props.fir);
    let girs = this.count(this.props.gir);

    if(confirm('Are these stats correct?' + '\n' + `Score ${score}` + '\n' + `FIR ${firs}` + '\n' + `GIR ${girs}` + '\n' + `Putts ${putts}`)){
      this.props.addRound(this.state);
      const { name, history } = this.props;
      history.push(`/rounds/${name}`);
      this.props.puttReset();
      this.props.resetHoleScore();
      this.props.firReset();
      this.props.girReset();
    } else {
      return;
    }
  };

  

  render(){
    const { course, date, slope, rating, comment } = this.state;
    const { fir, gir, coursesPlayed } = this.props;
    const totFir = calcFirGirTotal(fir);
    const totGir = calcFirGirTotal(gir);
    const round = Array(18).fill('');
    return (
      <form className="roundForm" onSubmit={this.handleSubmit}>
        <section>
          <div id='formTop'>
            <h2 id="titleNewRound">Enter New Round</h2>
            <h3>{this.props.name}</h3>
            <p>Fir total: {totFir}</p>
            <p>Gir total: {totGir}</p>
          </div>

          <div id="courseDate">
            <label htmlFor="course">
              Course:<input list="playedCourses" name="course" id="course" type="text" required onChange={this.handleLocalState} value={course}/>
              <datalist id="playedCourses">
                {coursesPlayed.map((c, i) => {
                  let name = Object.keys(c);
                  return <option key={i} value={name}/>;
                })}
              </datalist>
            </label>
            <label htmlFor="date">
              Date:<input id='dateInputField' type="date" name="date" id="date" required onChange={this.handleLocalState} value={date}/>
            </label>
          </div>
          <div id='slopeRatingDiv'>
            <label htmlFor="rating">
              Rating: <input name="rating" id="rating" type="text" required onChange={this.handleLocalState} value={rating}/>
            </label>
            <label htmlFor="slope">
              Slope: <input name="slope" id="slope" type="text" required onChange={this.handleLocalState} value={slope}/>
            </label> &nbsp;
          </div>

          <label id="teeSelector" htmlFor="tee">
            <TeeSelector selectChange={this.handleLocalState}/>
          </label>
        </section>

        <section>
          {round.map((h, i) => <HoleForm key={i} id={i} name={`${i}`} onSelect={this.handleChange} checkbox={this.handleCheckbox}/>)}
        </section>

        <div id="commentDiv">
          <label id="commentLabel" htmlFor="comment">Comment</label>
          <textarea id="comment" value={comment} name="comment" onChange={this.handleLocalState} placeholder="Add notes on round here if you wish"></textarea>
        </div>

        <div id="buttonDiv">
          <button id="submitButton">Submit</button>
        </div>
        
      </form>
    );
  }
}

export default withRouter(connect(
  (state, props) => ({ 
    hole: state.hole,
    fir: state.fir,
    gir: state.gir,
    rdScore: state.holesScore,
    putts: state.putts,
    coursesPlayed: state.coursesPlayed,
    name: props.match.params.name
  }),
  { allData, nextHole, teeSelection, holeScore, resetHoleScore, addRound, puttScore, puttReset, toggleFir, firReset, toggleGir, girReset }
)(AddRoundForm));