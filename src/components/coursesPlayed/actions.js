import { db } from '../../services/firebase';
import { LOAD_COURSES_PLAYED } from './reducers';

const players = db.ref('players');

export function allData(){
  return {

    type: LOAD_COURSES_PLAYED,
    payload: players.once('value').then(data => {
      let played = {};

      const allRounds = data.val();
      console.log(allRounds);

      Object.keys(allRounds).map(player => {
        let playerData = allRounds[player];
        Object.keys(playerData).map(key => {
          let round = playerData[key];
          let lowerRound = round.course.toLowerCase();

          if(!played.hasOwnProperty([lowerRound])){
            played[lowerRound] = [round.player];
          } else {
          //check if array has player name
            let players = played[lowerRound];
            if(!players.includes(round.player)){
              played[lowerRound].push(round.player);
            }
          }
        });
      });

      return played;
    })
  };
}


export function coursesPlayedList(arr){
  if(arr.length == 0) return;

  let played = {};

  for(let i = 0; i < arr.length; i++){
    players.child(arr[i]).once('value').then(data => {
      const rounds = data.val();

      Object.keys(rounds).map(key => {
        let round = rounds[key];
        let lowerRound = round.course.toLowerCase();
        if(!played.hasOwnProperty([lowerRound])){
          played[lowerRound] = [round.player];
        } else {
          //check if array has player name
          let players = played[lowerRound];
          if(!players.includes(round.player)){
            played[lowerRound].push(round.player);
          }
        }

      });


    });

  }
  return {
    type: LOAD_COURSES_PLAYED,
    payload: played
  };

}