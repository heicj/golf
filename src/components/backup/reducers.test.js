import { backupInfo, LOAD_DATES, ADD_DATE } from './reducers';

describe('test backup date reducers', () => {
  it('initial state is empty array', () => {
    const state = backupInfo(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads dates to state', () => {
    const date = ['3-25-2020', '3-24-2020'];
    const state = backupInfo(undefined, { type: LOAD_DATES, payload: date });
    expect(state).toEqual(date); 
  });

  it('adds date to date array', () => {
    const date = ['3-25-2020', '3-24-2020'];
    const state = backupInfo(date, { type: ADD_DATE, payload: '3-22-2020' });
    expect(state).toEqual(['3-22-2020', '3-25-2020', '3-24-2020']);
  });
});