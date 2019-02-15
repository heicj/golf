import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import HoleForm from '../addRoundForm/HoleForm';
import TeeSelector from '../addRoundForm/TeeSelector';
import { nextHole, teeSelection, holeScore, addRound, puttScore, toggleFir, toggleGir, calcFirGirTotal } from './actions';
import './editForm.css';

class EditForm extends PureComponent{

  componentDidMount(){

  }

  state = {
    player: this.props.name,
    course: this.props.course,
    date: this.props.date,
    tee: this.props.tee 
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
    const { course, date } = this.state;
    const { roundStats } = this.props;
    const totFir = calcFirGirTotal(fir);
    const totGir = calcFirGirTotal(gir);
    const totScore = rdScore.reduce((acc, curr) => acc + curr, 0);
    const totPutts = putts.reduce((acc, curr) => acc + curr, 0);
    // const totFir = fir.reduce((acc, curr) => curr === true ? acc + 1 : acc, 0);
    const round = Array(18).fill('');
    return (
      <form className="roundForm" onSubmit={this.handleSubmit}>
        <section>
          <h2>Edit Round</h2>
          <h3>{roundStats.name}</h3>
          <p>Score: {totScore}</p>
          <p>Fir total: {totFir}</p>
          <p>Gir total: {totGir}</p>
          <p>Putts: {totPutts}</p>
          <label htmlFor="course">
            Course:<input name="course" type="text" onChange={this.handleLocalState} value={course}/>
          </label>
          <label htmlFor="date">
            Date:<input type="date" name="date" onChange={this.handleLocalState} value={date}/>
          </label>

          <label htmlFor="tee">
            <TeeSelector value={this.state.tee}selectChange={this.handleLocalState}/>
          </label>
        </section>

        <section>
          {round.map((h, i) => <HoleForm key={i} id={i} name={`${i}`} onSelect={this.handleChange} checkbox={this.handleCheckbox}/>)}
        </section>
        <button>Submit</button>
        
      </form>
    );
  }
}

export default connect(
  (state, props) => ({ 
    hole: state.hole,
    fir: state.fir,
    gir: state.gir,
    rdScore: state.holesScore,
    putts: state.putts,
    name: props.match.params.name
  }),
  { nextHole, teeSelection, holeScore, addRound, puttScore, toggleFir, toggleGir }
)(EditForm);