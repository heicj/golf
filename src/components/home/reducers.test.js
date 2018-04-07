import { rounds, LOAD_ROUNDS, DELETE_ROUND, ADD_ROUND } from './reducers';

describe('tests rounds loading and initial state', () => {
  it('rounds initializes as empty array', () => {
    const state = rounds(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads rounds', () => {
    const rdsToLoad = [{}, {}];
    const state = rounds(undefined, { type: LOAD_ROUNDS, payload: rdsToLoad });
    expect(state).toEqual(rdsToLoad);
  });

  it('deletes a round', () => {
    const rds = [{ key: 123, name: 'test' }, { key: 456, name: 'test2' }];
    const state = rounds(rds, { type: DELETE_ROUND, payload: 123 });
    expect(state).toEqual([{ key: 456, name: 'test2' }]);
  });

  it('adds a round', () => {
    const rd = { course: 'abc' };
    const rd2 = { course: 'def' };
    const state = rounds(undefined, { type: ADD_ROUND, payload: rd });
    expect(state).toEqual([rd]);
    const state2 = rounds(state, { type: ADD_ROUND, payload: rd2 });
    expect(state2).toEqual([rd, rd2]);
  });
});