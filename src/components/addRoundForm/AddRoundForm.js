import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import HoleForm from './HoleForm';
import TeeSelector from './TeeSelector';
import { nextHole, teeSelection, holeScore, addRound } from './actions';

class AddRoundForm extends PureComponent{

  state = {
    player: '',
    course: '',
    date: '',
    tee: 'white'
  };
  
  componentDidMount(){
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    array.map((m, i) => this.setState({ ['fir' + i]: false }));
    array.map((m, i) => this.setState({ ['gir' + i]: false }));

  }


  handleChange = ({ target }) => {
    this.setState({ [target.name ]: target.value });
  };

  handleCheckbox = ({ target }) => {
    if(target.checked){
      this.setState({ [target.name]: true });
    } else {
      this.setState({ [target.name]: false });
    }
  };
  handleNext = () => {
    this.props.nextHole();
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    addRound(this.state);
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
            Course:<input name="course" type="text" onChange={this.handleChange} value={course}/>
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
        <button>Submit</button>
        
      </form>
    );
  }
}

export default connect(
  state => ({ hole: state.hole }),
  { nextHole, teeSelection, holeScore, addRound }
)(AddRoundForm);