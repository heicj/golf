import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import HoleForm from './HoleForm';
import TeeSelector from './TeeSelector';
import { nextHole, teeSelection, holeScore } from './actions';

class AddRoundForm extends PureComponent{

  state = {
    player: '',
    course: '',
    date: '',
    tee: 'white',
    hole: 1,
    score: [],
    putts: [],
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name ]: target.value });
  };

  handleCheckbox = ({ target }) => {
    if(target.checked){
      this.setState({ [target.name]: true });
    } else {
      this.setState({ [target.name]: false });
    }
  }
  handleNext = () => {
    this.props.nextHole();
  };

  

  render(){
    const { course, date } = this.state;
    const round = Array(18).fill('');
    return (
      <form>
        <section>
          <h2>Enter New Round</h2>
          <h3>Player name will go here</h3>

          <label htmlFor="course">
            Course:<input required name="course" type="text" onChange={this.handleChange} value={course}/>
          </label>
          <label htmlFor="date">
            Date:<input type="date" name="date" onChange={this.handleChange} value={date}/>
          </label>
          
          <label htmlFor="tee">
            <TeeSelector selectChange={this.handleChange}/>
          </label>
        </section>

        <section>
          {round.map((h, i) => <HoleForm key={i} id={i} name={`${i}`} onSelect={this.handleChange} checkbox={this.handleCheckbox}/>)}
        </section>
        
      </form>
    );
  }
}

export default connect(
  state => ({ hole: state.hole }),
  { nextHole, teeSelection, holeScore }
)(AddRoundForm);