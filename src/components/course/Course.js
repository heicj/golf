import React, { PureComponent } from 'react';
import './course.css';

export default class Course extends PureComponent{

  render(){
    const { courseName, players } = this.props;
    return (
      <section>
        <div id='coursePlayedData'>
          <div id='courseName' className='courseDivs'>{courseName}</div>
          <div className='courseDivs'>{players.includes('Charlie') ? '✓' : ''}</div>
          <div className='courseDivs'>{players.includes('Jeremy') ? '✓' : ''}</div>
        </div>
      </section>
    );
  }
}