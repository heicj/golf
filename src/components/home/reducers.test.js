import { rounds, LOAD_ROUNDS } from './reducers';

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
});