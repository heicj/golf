import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRounds } from '../home/actions';
import { deleteRd, changeName } from './actions';
import Round from '../round/Round';
import { getCourseNamesFromArrayOfRounds } from './helperFunction';
import './viewrounds.css';
import { excelFunc } from '../../services/excelFunc';

class ViewRounds extends Component{

  state = {
    page: 1,
    perPage: 10,
    courseLocations: null,
    filteredRounds: null,
    location: ''
  };

  componentDidMount(){
    const { name } = this.props;
    this.setState({ 'page': 1 });
    this.props.changeName(name);
    this.props.getRounds(name);
    
  }
  
  componentDidUpdate(prevProps, prevState){
    
    if(prevProps.name !== this.props.name){
      this.props.changeName(this.props.name);
      this.props.getRounds(this.props.name);
    }
    if(prevState.page !== 1 && prevProps.name !== this.props.name){
      this.setState({ 'page': 1 });
    }
  }

  handleSortRoundsByLocation = () => {
    if(this.state.courseLocations == null){
      let courseLocations = getCourseNamesFromArrayOfRounds(this.props.rounds);
      this.setState({ 'courseLocations': courseLocations });
    } else {
      this.setState({ 'courseLocations': null });
      this.setState({ 'filteredRounds': null });
    }
  };

  locationClick = ({ target }) => {
    let location = target.id;
    //courseLocations set to null which hides the locations list of divs
    this.setState({ 'location': location,
      'courseLocations': null
    });

    //TODO set filteredLocations to an array of courses where course name equals location
    let filtered = this.props.rounds.filter(rd => {
      let courseName = rd.course.toUpperCase();
      let desiredFirteredCourse = location.toUpperCase();
      if(courseName == desiredFirteredCourse) return rd;
    });
    this.setState({ filteredRounds: filtered });
  };

  handleClick = () => {
    let rounds = this.props.rounds;
    this.props.excelFunc(rounds);
  };

  handlePaging = ({ target }) => {
    let name = target.id;
    let page = this.state.page;
    let perPage = this.state.perPage;
    let maxPage = Math.ceil(this.props.rounds.length / perPage);
    if(name == 'minus'){
      if(page <= 1) return;
      let newPage = page - 1;
      this.setState({ 'page': newPage });
    }
    if(name == 'plus'){
      if(page == maxPage) return;
      let newPage = page + 1;
      this.setState({ 'page': newPage });
    }
    if(name == 'first') {
      this.setState({ 'page': 1 });
    }

    if(name == 'last'){
      this.setState({ 'page': maxPage });
    } 
  };

  handleSelect = ({ target }) => {
    // this.setState({ 'page': 1 });
    const { page, perPage } = this.state;
    let newPage = Math.ceil(((page * perPage) - (perPage - 1)) / target.value);
  
    this.setState({ 
      [target.name ]: target.value,
      'page': newPage
    });
  };

  render(){
    const { rounds, deleteRd, name } = this.props;
    const { page, perPage, courseLocations, filteredRounds } = this.state;
    return (
      <section>
        <h2 id="playerH2">{this.props.name + "'s"} Rounds</h2>
        <div id="buttonDiv">
          <button id='sortRoundsButton' onClick={this.handleSortRoundsByLocation}>Sort Rounds By Location</button>
        </div>
        
        { courseLocations != null ?
          <div>
            {
              <section id='roundLocationContainer'>
                <div id='allRoundsDiv' className='courseLocationDiv' onClick={this.handleSortRoundsByLocation}>ALL ROUNDS</div>
                { Object.keys(courseLocations).map((location) => {
                  return <div className='courseLocationDiv' onClick={this.locationClick} id={location}>{location}</div>;
                })
                }
              </section>
            }
          </div>
          :
          null
        }
        <div id="buttonDiv">
          <button onClick={this.handleClick}>DOWNLOAD {name}'s ROUNDS</button>
        </div>
        
        <div className='pageContainer'>
          <div className='pageControl' name='first' id='first' onClick={this.handlePaging}>First Page</div>
          <div className='pageControl' name='minus' id='minus' onClick={this.handlePaging}>Prev Page</div>
          <div id='pageIndicator'>{this.state.page}/{Math.ceil(rounds.length / perPage)}</div>
          <div className='pageControl' name='plus' id='plus' onClick={this.handlePaging}>Next Page</div>
          <div className='pageControl' name='last' id='last' onClick={this.handlePaging}>Last Page</div>
        </div>
        <div id='perPageSelector'>
          <div>Rounds Per Page</div>
          <select id='perPage' name='perPage' onChange={this.handleSelect}>
            <option value={5}>5</option>
            <option value={10} selected>10</option>
          </select>
        </div>
        {
          filteredRounds == null ?
          rounds.slice((page * perPage) - perPage, (page * perPage)).map((r, i) => <Round name={name}  deleteRound={deleteRd} key={i} id={r.key}  roundStats={r}/>)
          :
          filteredRounds.map((r, i) => <Round name={name}  deleteRound={deleteRd} key={i} id={r.key}  roundStats={r}/>)
        }
        
        <div className='pageContainer'>
          <div name='minus' id='minus' onClick={this.handlePaging}>Prev. Page</div>
          <div>{this.state.page}/{Math.ceil(rounds.length / perPage)}</div>
          <div name='plus' id='plus' onClick={this.handlePaging}>Next Page</div>
        </div>
      </section>
    );
  }
}

export default connect(
  (state, props) => ({
    rounds: state.rounds,
    name: props.match.params.name
  }),
  { getRounds, deleteRd, changeName, excelFunc }
)(ViewRounds);