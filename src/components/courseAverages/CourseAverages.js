import React, { Component } from 'react';
import { getCourseAvg } from './actions';
import CourseAvgRdView from '../courseAvgRdView/CourseAvgRdView';

export default class CourseAverages extends Component{
  
  state = {
    CharlieCourseAverages: {},
    JeremyCourseAverages: {}
  };

  handleLocalState = (name, data) => {
    let stateObj = {};
    let key = name + 'CourseAverages';
    stateObj[key] = data;
    this.setState(stateObj);
  }
  
  componentDidMount(){
    getCourseAvg('Charlie', this.handleLocalState);
    getCourseAvg('Jeremy', this.handleLocalState);
  }

  render(){
    const { CharlieCourseAverages, JeremyCourseAverages } = this.state;
    return (
      <section>
        <div>hello world</div>
        {
          CharlieCourseAverages ?
            <div>
              <h1>Charlie</h1>
              { 
                Object.keys(CharlieCourseAverages).map(key => {
                  return <CourseAvgRdView key={key} course={key} rd={CharlieCourseAverages[key]} />;

                })
              }
            </div> : null
        }
        {
          JeremyCourseAverages ?
            <div>
              <h1>Jeremy</h1>
              {
                Object.keys(JeremyCourseAverages).map(key => {
                  return <CourseAvgRdView key={key} course={key} rd={JeremyCourseAverages[key]} />
                })
              }
            </div> : null
        }
      </section>
    );
  }
}