import { db } from '../../services/firebase';
import { ADD_DATE, LOAD_DATES, LOAD_DOWNLOAD_DATA } from './reducers';

const players = db.ref('players');
const backupRef = db.ref('backup');
const downloadsRef = db.ref('downloads');

export function backup(){

  return (dispatch, getState) => {
    
    const date = new Date().toLocaleDateString().split(',')[0].split('/').join('-');

    players.once('value').then(data => {
      const alldata = data.val();
      backupRef.child(date).push(alldata);
    });

    dispatch({
      type: ADD_DATE,
      payload: date
    });
  };
}

//function that returns dates of backups
export function backupDates(){

  return (dispatch, getState) => {
    let datesArray = [];
    backupRef.once('value').then(data => {
      let dates = data.val();
      Object.keys(dates).map(key => {
        datesArray.push(key);
      });
    }).then(() => {

      dispatch({
        type: LOAD_DATES,
        payload: datesArray.sort(function(a, b){
          return a < b ? 1 : a > b ? -1 : 0;
        })
      });
    });
  };
}

//gets data about downloaded times
export function getDownloadData(){

  return (dispatch, getState) => {

    dispatch({
      type: LOAD_DOWNLOAD_DATA,
      payload: downloadsRef.once('value').then(data => {

        let allData = data.val();
        let arr = [];
        
        Object.keys(allData).map(date => {
          let dateData = allData[date];
          
          Object.keys(dateData).map(k => {
            let a = [];
            a[0] = date;
            a[1] = dateData[k].time;
            a[2] = dateData[k].player;
            arr.push(a);
          });
        
        });
        return arr;
      })
    });
  };
}