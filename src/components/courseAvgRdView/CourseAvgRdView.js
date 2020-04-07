import React, { Component } from 'react';
import './courseAvgRdView.css';

export default class CourseAvgRdView extends Component{
  render(){
    const { course, rd } = this.props;
    return (
      <section className='avgSection'>
        <h2>{course}</h2>
        <h3>Times played: {rd.score.length}</h3>
        <ul className='avgUl'>
          {Object.keys(rd).map((stat, i) => {
            let total = rd[stat].reduce((a, c) => a + c);
            let avg = (total / rd[stat].length).toFixed(2);
            return <li key={i}>{stat}: {avg}</li>;
          })}

        </ul>
      </section>
    )
  }
}