import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import HoleForm from './HoleForm';
import TeeSelector from './TeeSelector';

class AddRoundForm extends PureComponent{

  state = {
    player: '',
    course: '',
    date: '',
    tee: '',
    hole: 1,
    score: '',
    putts: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name ]: target.value });
  }

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
            <TeeSelector onChange={this.handleChange}/>
          </label>
        </section>
          
        <section>
          {round.map((h, i) => <HoleForm key={i} id={i} hole={`hole${i}`} onSelect={this.handleChange}/>)}
        </section>
        
      </form>
    );
  }
}

export default connect(
  null,
  null
)(AddRoundForm);