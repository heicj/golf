import { ADD_TO_WISHLIST, LOAD_WISHLIST, DELETE_WISH } from './reducers';
import { db } from '../../services/firebase';

const wl = db.ref('wishlist');

export function addToWishlist(wish){
  // wl.push(wish);
  
  return (dispatch, getState) => {

    dispatch({
      type: ADD_TO_WISHLIST,
      payload: wl.push(wish).then(data => {
        let key = data.getKey();
        wish.key = key;
        return wish;
      })
    });
  };

}

export function getWishlist(){
  return (dispatch, getState) => {
    dispatch({
      type: LOAD_WISHLIST,
      payload: wl.once('value').then(data => {
        let list = data.val();
        let arr = [];
        Object.keys(list).map(key => {
          let w = list[key];
          w.key = key;
          arr.push(w);
        });
        return arr.reverse();
      })
    });
  };
}

export function deleteWish(key){
  wl.child(key).remove();

  return (dispatch, getState) =>{
    dispatch({
      type: DELETE_WISH,
      payload: key
    });
  };
}