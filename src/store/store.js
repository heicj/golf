import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './PromiseMiddleware';
import { putts, holesScore, hole, player, tee, fir, gir, rdFirTotal } from '../components/addRoundForm/reducers';
import { rounds } from '../components/home/reducers';
import { auth } from '../components/login/reducers';
import { name } from '../components/viewRounds/reducers';
import { singleRound } from '../components/editForm/reducers';
import { coursesPlayed } from '../components/coursesPlayed/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  auth,
  holesScore,
  putts,
  hole,
  player,
  tee,
  fir,
  gir,
  rdFirTotal,
  rounds,
  name,
  singleRound,
  coursesPlayed
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