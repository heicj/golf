import { singleRound, LOAD_ROUND } from './reducers';

describe('test loading single round by id', () => {
  it('round initially an empty object', () => {
    const state = singleRound(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads rd to state', () => {
    const rd = { 'id': '123', 'name': 'test' };
    const state = singleRound(undefined, { type: LOAD_ROUND, payload: rd });
    expect(state).toEqual(rd);
  });
});