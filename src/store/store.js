import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './PromiseMiddleware';
import { putts, holesScore, hole, player, tee, fir, gir, rdFirTotal } from '../components/addRoundForm/reducers';
import { rounds } from '../components/home/reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  holesScore,
  putts,
  hole,
  player,
  tee,
  fir,
  gir,
  rdFirTotal,
  rounds
});

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware
    )
  )
);

export default store;