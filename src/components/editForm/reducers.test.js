import { editRound, GET_ROUND } from './reducers';

describe('test loading indivdual round', () => {
  it('round is initially an empty object', () => {
    const state = editRound(undefined, {});
    expect(state).toEqual({});
  });

  it('loads round', () => {
    const rdToLoad = { 'rd': 'test' };
    const state = editRound(undefined, { type: GET_ROUND, payload: rdToLoad });
    expect(state).toEqual(rdToLoad);
  });
});