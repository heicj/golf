import { coursesPlayed, LOAD_COURSES_PLAYED } from './reducers';

describe('tests courses played initial state', () => {
  it('course played is empty obj initially', () => {
    const state = coursesPlayed(undefined, {});
    expect(state).toEqual({});
  });

  it('loads courses played obj', () => {
    const playedList = { 'chehalem glenn': true, 'bandon': true };
    const state = coursesPlayed(undefined, { type: LOAD_COURSES_PLAYED, payload: playedList });
    expect(state).toEqual(playedList);
  });
});