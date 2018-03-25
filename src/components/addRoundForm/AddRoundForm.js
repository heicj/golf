import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class AddRoundForm extends PureComponent{

  state = {
    hole: 1,
    score: '',
    putts: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name ]: target.value });
  }
  render(){
    const { hole, score, putts } = this.state;
    return (
      <form>
        <h2>HOLE {hole}</h2>
        <label htmlFor="score">
          Score:<input required name="score" type="number" onChange={this.handleChange} value={score}/>
        </label>
        <label htmlFor="putts">
          Putts:<input required name="putts" type="number" onChange={this.handleChange} value={putts}/>
        </label>
      </form>
    );
  }
}

export default connect(
  null,
  null
)(AddRoundForm);