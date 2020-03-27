import React, { Component } from 'react';
import { backupDates, backup, getDownloadData } from './backupFuncs';
import { connect } from 'react-redux';
import './backup.css';

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
      <section id='mainBackupSection'>
        {
          dates ? 
            <section className='dataSection'>
              <h2 className='titles'>LAST 10 BACKUP DATES</h2>
       
              <button id='backupButton' onClick={this.handleBackup}>Backup</button>
              <ol>
                {dates.slice(0, 10).map((d, i) => <li key={i}>{d}</li>)}
              </ol>
            </section>
            : null  
        }
        {
          downloads ? 
            <section className='dataSection'>
              <h2 className='titles'>LAST 10 DOWNLOADS</h2>
              <ol>
                {downloads.reverse().slice(0, 10).map((d, i) => <li key={i}>date: {d[0]}  time: {d[1]}</li>)}
              </ol>
            </section>
            : null
        }
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