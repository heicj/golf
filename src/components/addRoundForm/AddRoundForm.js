import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HoleForm from './HoleForm';
import TeeSelector from './TeeSelector';
import { nextHole, teeSelection, holeScore, resetHoleScore, addRound, puttScore, puttReset, toggleFir, firReset, toggleGir, girReset, calcFirGirTotal } from './actions';
import { putts } from './reducers';
import './addRoundForm.css';
import { totalmem } from 'os';

class AddRoundForm extends PureComponent{

  componentDidMount(){

  }

  state = {
    player: this.props.name,
    course: '',
    date: '',
    tee: 'white'
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
    const { course, date } = this.state;
    const { fir, gir, rdScore, putts } = this.props;
    const totFir = calcFirGirTotal(fir);
    const totGir = calcFirGirTotal(gir);
    // const totScore = rdScore.reduce((acc, curr) => acc + curr, 0);
    // const totPutts = putts.reduce((acc, curr) => acc + curr, 0);
    // const totFir = fir.reduce((acc, curr) => curr === true ? acc + 1 : acc, 0);
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
              Course:<input name="course" id="course" type="text" onChange={this.handleLocalState} value={course}/>
            </label>
            <label htmlFor="date">
              Date:<input type="date" name="date" id="date" onChange={this.handleLocalState} value={date}/>
            </label>
          </div>

          <label id="teeSelector" htmlFor="tee">
            <TeeSelector selectChange={this.handleLocalState}/>
          </label>
        </section>

        <section>
          {round.map((h, i) => <HoleForm key={i} id={i} name={`${i}`} onSelect={this.handleChange} checkbox={this.handleCheckbox}/>)}
        </section>
        
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
    name: props.match.params.name
  }),
  { nextHole, teeSelection, holeScore, resetHoleScore, addRound, puttScore, puttReset, toggleFir, firReset, toggleGir, girReset }
)(AddRoundForm));