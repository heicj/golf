import React, { Component } from 'react';
import { backupDates, backup } from './backupFuncs';
import { connect } from 'react-redux';

class Backup extends Component{
  
  handleBackup = () => {
    this.props.backup();
  };
  
  componentDidMount(){
    this.props.backupDates();
  }

  render(){
    const { dates } = this.props;
    return (
      <section>
        <button onClick={this.handleBackup}>Backup</button>
        <ul>
          {dates.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
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