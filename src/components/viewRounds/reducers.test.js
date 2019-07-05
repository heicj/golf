import { name, CHANGE_NAME } from './reducers';

describe('tests changing name reducer', () =>{
  it('initial state is empty string', () => {
    const state = name(undefined, {});
    expect(state).toEqual('');
  });

  it('tests that state changes to payload', () => {
    const state = name(undefined, { type: CHANGE_NAME, payload: 'Charlie' });
    expect(state).toEqual('Charlie');
  });
});