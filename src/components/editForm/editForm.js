import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getRound } from './actions';
import HoleForm from '../addRoundForm/HoleForm';
import TeeSelector from '../addRoundForm/TeeSelector';
// import { nextHole, teeSelection, holeScore, addRound, puttScore, toggleFir, toggleGir, calcFirGirTotal } from './actions';
import './editForm.css';

class EditForm extends PureComponent{

  componentDidMount(){
    let round = this.props.rounds.filter(round => round.key == this.props.id);
    this.props.getRound(round[0]);
  }

  state = {
    // course: this.props.editRound.course,
    // date: this.props.editRound.date,
    // fir: this.props.editRound.fir,
    // gir: this.props.editRound.gir,
    // holesScore: this.props.editRound.holesScore,
    // player: this.props.editRound.name,
    // putts: this.props.editRound.putts,
    // tee: this.props.editRound.tee,
    // totalPutts: this.props.editRound.totalPutts,
    // totalFir: this.props.editRound.totalFir,
    // totalGir: this.props.editRound.totalGir,
    // totalScore: this.props.editRound.totalScore,
    // key: this.props.editRound.key
    
  };

  handleLocalState = ({ target }) => {
    this.setState({ [target.name ]: target.value });
  };
  
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
  handleNext = () => {
    this.props.nextHole();
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addRound(this.state);
  };

  

  render(){
    
    const { course, date, fir, gir, holeScore, player, putts, tee, totalPutts, totalFir, totalGir, totalScore, key} = this.state;
    return (
      <form className="roundForm" onSubmit={this.handleSubmit}>
        <section>
          <h2>Edit Round</h2>
          <h3>{name}</h3>
          <p>Score: {totalScore}</p>
          <p>Fir total: {totalFir}</p>
          <p>Gir total: {totalGir}</p>
          <p>Putts: {totalPutts}</p>
          <label htmlFor="course">
            Course:<input name="course" type="text" onChange={this.handleLocalState} value={course}/>
          </label>
          <label htmlFor="date">
            Date:<input type="date" name="date" onChange={this.handleLocalState} value={date}/>
          </label>

          <label htmlFor="tee">
            <TeeSelector value={tee}selectChange={this.handleLocalState}/>
          </label>
        </section>

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
    editRound: state.editRound,
    rounds: state.rounds
  }),
  { getRound }
)(EditForm);