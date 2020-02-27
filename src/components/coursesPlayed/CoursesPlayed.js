import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Course from '../course/Course';
import { allData } from './actions';
import './coursesPlayed.css';

class Courses extends PureComponent{
  componentDidMount(){
    this.props.allData();
  }


  render(){
    const { coursesPlayed } = this.props;
    return (
      <section>
        <h2 id='courseHeader'>Courses Played</h2>
        <section id='listSection'>
          <div id='coursePlayedHeaders'>
            <div>Course</div>
            <div>Charlie</div>
            <div>Jeremy</div>
          </div>
          { coursesPlayed.map((course, i) => {
            let courseName = Object.keys(course)[0];
            return <Course key={courseName} courseName={courseName} players={coursesPlayed[i][courseName]} />;
          })}
        </section>
      </section>

    );
  }
}

export default connect(
  (state, props) => ({
    coursesPlayed: state.coursesPlayed
  }),
  { allData }
)(Courses);