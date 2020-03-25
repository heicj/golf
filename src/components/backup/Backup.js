import React, { Component } from 'react';
import { backupDates, backup } from './backupFuncs';
import { connect } from 'react-redux';

class Backup extends Component{
  state = {
    dates: []
  };

  // handler = (key, value) => {
  //   let obj = {};
  //   obj[key] = value;
  //   this.setState(
  //     obj
  //   );
  // };

  handleBackup = () => {
    this.props.backup();
    // backupDates(this.handler);
  }
  
  componentDidMount(){
    this.props.backupDates();
    // backupDates(this.handler);
  }

  render(){

    return (
      <section>
        <button onClick={this.handleBackup}>Backup</button>
        <div>hello backup</div>
      </section>
    );
  }
}

export default connect(
  (state, props) => ({
    dates: state.backupInfo
  }), 
  { backupDates, backup }
)(Backup);