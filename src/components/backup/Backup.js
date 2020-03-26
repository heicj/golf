import React, { Component } from 'react';
import { backupDates, backup, getDownloadData } from './backupFuncs';
import { connect } from 'react-redux';

class Backup extends Component{
  
  handleBackup = () => {
    this.props.backup();
  };
  
  componentDidMount(){
    this.props.backupDates();
    this.props.getDownloadData();
  }

  render(){
    const { dates, downloads } = this.props;
    return (
      <section>
        <button onClick={this.handleBackup}>Backup</button>
        <ul>
          {dates.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
        <ul>
          {downloads.map((d, i) => <li key={i}>date: {d[0]}  time: {d[1]}</li>)}
        </ul>
      </section>
    );
  }
}

export default connect(
  (state, props) => ({
    dates: state.backupInfo,
    downloads: state.downloadInfo
  }), 
  { backupDates, backup, getDownloadData }
)(Backup);