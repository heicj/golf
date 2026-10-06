import React, { Component } from 'react';
import { getCourseAvg } from './actions';
import CourseAvgRdView from '../courseAvgRdView/CourseAvgRdView';
import './courseAverages.css';

export default class CourseAverages extends Component{
  
  state = {
    CharlieCourseAverages: {},
    JeremyCourseAverages: {},
    EvanCourseAverages: {}
  };

  handleLocalState = (name, data) => {
    let stateObj = {};
    let key = name + 'CourseAverages';
    stateObj[key] = data;
    this.setState(stateObj);
  };
  
  componentDidMount(){
    getCourseAvg('Charlie', this.handleLocalState);
    getCourseAvg('Jeremy', this.handleLocalState);
    getCourseAvg('Evan', this.handleLocalState);
  }

  render(){
    const { CharlieCourseAverages, JeremyCourseAverages, EvanCourseAverages } = this.state;
    return (
      <section id='mainAvgContainer'>
        <div className='playerAvgDiv'>
          <h1 className='avgHeaders'>Charlie's Course Averages</h1>
          { 
            Object.keys(CharlieCourseAverages).map(key => {
              return <CourseAvgRdView key={key} course={key} rd={CharlieCourseAverages[key]} />;

            })
          }
        </div> 
        <div className='playerAvgDiv'>
          <h1 className='avgHeaders'>Jeremy's Course Averages</h1>
          {
            Object.keys(JeremyCourseAverages).map(key => {
              return <CourseAvgRdView key={key} course={key} rd={JeremyCourseAverages[key]} />
            })
          }
        </div> 
        <div className='playerAvgDiv'>
          <h1 className='avgHeaders'>Evan's Course Averages</h1>
          {
            Object.keys(EvanCourseAverages).map(key => {
              return <CourseAvgRdView key={key} course={key} rd={EvanCourseAverages[key]} />
            })
          }
        </div> 
      </section>
    );
  }
}