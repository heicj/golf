import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { allData } from './actions';

class Courses extends PureComponent{
  componentDidMount(){
    this.props.allData();
  }


  render(){
    const { coursesPlayed } = this.props;
    return (
      <section>
        <h2>Courses Played</h2>
        
        { Object.keys(coursesPlayed).map(key => <ul key={key}>{key}</ul>)}
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