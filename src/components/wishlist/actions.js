import { ADD_TO_WISHLIST, LOAD_WISHLIST } from './reducers';
import { db } from '../../services/firebase';

const wl = db.ref('wishlist');

export function addToWishlist(wish){
  
  return (dispatch, getState) => {
    wl.push(wish);

    dispatch({
      type: ADD_TO_WISHLIST,
      payload: wish
    });
  };

}

export function getWishlist(){
  return (dispatch, getState) => {
    dispatch({
      type: LOAD_WISHLIST,
      payload: wl.once('value').then(data => {
        return data.val();
      })
    });
  };
}