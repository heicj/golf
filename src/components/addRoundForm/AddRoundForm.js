import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import HoleForm from './HoleForm';
import TeeSelector from './TeeSelector';
import { nextHole, teeSelection, holeScore, addRound, puttScore, toggleFir, toggleGir } from './actions';

class AddRoundForm extends PureComponent{

  state = {
    player: '',
    course: '',
    date: '',
    tee: 'white'
  };

  handleLocalState = ({ target }) => {
    this.setState({ [target.name ]: target.value });
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
  handleNext = () => {
    this.props.nextHole();
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addRound(this.state);
  };

  

  render(){
    const { course, date } = this.state;
    const round = Array(18).fill('');
    return (
      <form onSubmit={this.handleSubmit}>
        <section>
          <h2>Enter New Round</h2>
          <h3>Player name will go here</h3>

          <label htmlFor="course">
            Course:<input name="course" type="text" onChange={this.handleLocalState} value={course}/>
          </label>
          <label htmlFor="date">
            Date:<input type="date" name="date" onChange={this.handleLocalState} value={date}/>
          </label>

          <label htmlFor="tee">
            <TeeSelector selectChange={this.handleLocalState}/>
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
  state => ({ hole: state.hole }),
  { nextHole, teeSelection, holeScore, addRound, puttScore, toggleFir, toggleGir }
)(AddRoundForm);