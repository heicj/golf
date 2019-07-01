import { GET_ROUND } from './reducers';
import { db } from '../../services/firebase';

export function getRound(round){
  return {
    type: GET_ROUND,
    payload: round

  };
}
