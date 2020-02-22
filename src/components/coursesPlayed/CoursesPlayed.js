import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { coursesPlayedList, allData } from './actions';

class Courses extends PureComponent{
  componentDidMount(){
    this.props.allData();
    // this.props.coursesPlayedList(['Charlie', 'Jeremy']);
  }


  render(){
    const { coursesPlayed } = this.props;
    return (
      <section>
        <h2>Courses Played</h2>
        
        { Object.keys(coursesPlayed).forEach(course => <li key={course.course}>{course.course}</li>)}
      
      </section>

    );
  }
}

export default connect(
  (state, props) => ({
    coursesPlayed: state.coursesPlayed
  }),
  { coursesPlayedList, allData }
)(Courses);