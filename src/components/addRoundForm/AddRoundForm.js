import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class AddRoundForm extends PureComponent{

  state = {
    player: '',
    course: '',
    date: '',
    tee: '',
    hole: 0,
    score: '',
    putts: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name ]: target.value });
  }
  render(){
    const { hole, score, putts, course } = this.state;
    return (
      <form>
        {hole === 0 ?
          <section>
            <div>Enter New Round</div>
            <label htmlFor="course">
            Course:<input required name="course" type="text" onChange={this.handleChange} value={course}/>
            </label>
          </section>
          :
          <section>
            <h2>HOLE {hole}</h2>
            <label htmlFor="score">
              Score:<input required name="score" type="number" onChange={this.handleChange} value={score}/>
            </label>
            <label htmlFor="putts">
              Putts:<input required name="putts" type="number" onChange={this.handleChange} value={putts}/>
            </label>
          </section>
        }
      </form>
    );
  }
}

export default connect(
  null,
  null
)(AddRoundForm);