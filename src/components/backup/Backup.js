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