import { ADD_HOLE_SCORE, ADD_PUTT_SCORE, CHOOSE_TEE, holes, player, putts, SELECT_PLAYER, tee, UPDATE_HOLE_SCORE, UPDATE_PUTT_SCORE } from './reducers';


describe('tests adding hole score and updating score', () => {

  it('default state is array ', () => {
    const state = holes(undefined, {});
    expect(state).toEqual(Array(18).fill(''));
  });
    
  it('adds score value to array at index', () => {
    const state = holes(undefined, { type: ADD_HOLE_SCORE, payload: { id: 3, value: 4 } });
    expect(state).toEqual(['', '', '', 4, '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
    
    const newState = holes(state, { type: ADD_HOLE_SCORE, payload: { id: 2, value: 3 } });
    expect(newState).toEqual(['', '', 3, 4, '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
  });
    
  it('updates hole score when given index and value', () => {
    const state = ['', '', '', 4, '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    const update = holes(state, { type: UPDATE_HOLE_SCORE, payload: { id: 3, value: 5 } });
    expect(update).toEqual(['', '', '', 5, '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
  });
});

describe('tests adding putt total and updating putt total', () => {
  it('default state is array', () => {
    const state = putts(undefined, {});
    expect(state).toEqual(Array(18).fill(''));
  });

  it('adds putt score to array when given index and value', () => {
    const state = putts(undefined, { type: ADD_PUTT_SCORE, payload: { id: 3, value: 4 } });
    expect(state).toEqual(['', '', '', 4, '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
    
    const newState = putts(state, { type: ADD_PUTT_SCORE, payload: { id: 2, value: 3 } });
    expect(newState).toEqual(['', '', 3, 4, '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
  });

  it('updates putt score when given index and value', () => {
    const state = ['', '', '', 4, '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    const update = putts(state, { type: UPDATE_PUTT_SCORE, payload: { id: 3, value: 5 } });
    expect(update).toEqual(['', '', '', 5, '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
  });
});

describe('changes tee selection to desired tee', () => {
  it('default state is white tees', () => {
    const state = tee(undefined, {});
    expect(state).toEqual('white');
  });

  it('changes to tee to selection', () => {
    const state = tee(undefined, { type: CHOOSE_TEE, payload: 'red' });
    expect(state).toEqual('red');
  });
});

describe('tests player state', () => {
  it('player state initializes as empty string', () => {
    const state = player(undefined, {});
    expect(state).toEqual('');
  });

  it('adds player to player state', () => {
    const state = player(undefined, { type: SELECT_PLAYER, payload: 'Charlie' });
    expect(state).toEqual('Charlie');
  });
});

