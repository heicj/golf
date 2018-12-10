import { ADD_HOLE_SCORE, ADD_PUTT_SCORE, CHOOSE_TEE, fir,  FIR_RESET, hole, holesScore, NEXT_HOLE, player, putts, RESET_PUTTS, RESET_HOLE_SCORE, PREV_HOLE, SELECT_PLAYER, tee, TOGGLE_FIR, rdFirTotal, TOTAL_FIR, UPDATE_HOLE_SCORE, UPDATE_PUTT_SCORE } from './reducers';


describe('tests adding hole score and updating score', () => {

  it('default state is array ', () => {
    const state = holesScore(undefined, {});
    expect(state).toEqual(Array(18).fill(0));
  });
    
  it('adds score value to array at index', () => {
    const state = holesScore(undefined, { type: ADD_HOLE_SCORE, payload: { id: 3, value: 4 } });
    expect(state).toEqual([0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    
    const newState = holesScore(state, { type: ADD_HOLE_SCORE, payload: { id: 2, value: 3 } });
    expect(newState).toEqual([0, 0, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
    
  it('updates hole score when given index and value', () => {
    const state = [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const update = holesScore(state, { type: UPDATE_HOLE_SCORE, payload: { id: 3, value: 5 } });
    expect(update).toEqual([0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });

  it('resets hole score to initial state', () => {
    const state = [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const reset = holesScore(state, { type: RESET_HOLE_SCORE });
    expect(reset).toEqual((Array(18).fill(0)));
  });
});

describe('tests adding putt total and updating putt total', () => {
  it('default state is array', () => {
    const state = putts(undefined, {});
    expect(state).toEqual(Array(18).fill(0));
  });

  it('adds putt score to array when given index and value', () => {
    const state = putts(undefined, { type: ADD_PUTT_SCORE, payload: { id: 3, value: 4 } });
    expect(state).toEqual([0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    
    const newState = putts(state, { type: ADD_PUTT_SCORE, payload: { id: 2, value: 3 } });
    expect(newState).toEqual([0, 0, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });

  it('updates putt score when given index and value', () => {
    const state = [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const update = putts(state, { type: UPDATE_PUTT_SCORE, payload: { id: 3, value: 5 } });
    expect(update).toEqual([0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });

  it('resets putts to initial state', () => {
    const state =  [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const reset = putts(state, { type: RESET_PUTTS });
    expect(reset).toEqual(Array(18).fill(0));
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

describe('tests tracking current hole', () => {
  it('hole initializing at 1', () => {
    const state = hole(undefined, {});
    expect(state).toEqual(1);
  });

  it('increments current hole by one', () => {
    const state = hole(undefined, { type: NEXT_HOLE });
    expect(state).toEqual(2);
    const anotherHole = hole(state, { type: NEXT_HOLE });
    expect(anotherHole).toEqual(3);
  });

  it('decreases current hole by one', () => {
    const state = hole(3, { type: PREV_HOLE });
    expect(state).toEqual(2);
  });
});

describe('tests fir initial state and handling', () => {
  it('fir initial state is all false', () => {
    const state = fir(undefined, {});
    expect(state).toEqual([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  });

  it('toggles fir status', () => {
    const state = fir(undefined, { type: TOGGLE_FIR, payload: 3 });
    expect(state).toEqual([false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
    const newState = fir(state, { type: TOGGLE_FIR, payload: 2 });
    expect(newState).toEqual([false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
    const newState2 = fir(newState, { type: TOGGLE_FIR, payload: 3 });
    expect(newState2).toEqual([false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  });

  it('resets fir to initial state', () => {
    const state = [false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
    const reset = fir(state, { type: FIR_RESET });
    expect(reset).toEqual([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  });
});

describe('tests total fir calc', () => {
  it('totalFir total starts at zero', () => {
    const state = rdFirTotal(undefined, {});
    expect(state).toBe(0);
  });

  it('sets total fir to number given', () => {
    const state = rdFirTotal(undefined, { type: TOTAL_FIR, payload: 7 });
    expect(state).toBe(7);
  });
});
