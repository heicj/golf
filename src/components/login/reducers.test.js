import { auth, SIGNIN, SIGNOUT } from './reducers';

describe('test initial auth state', () => {
  it('auth initializes as false', () => {
    const state = auth(undefined, {});
    expect(state).toEqual(false);
  });

  it('change login to true when LOGIN', () => {
    const state = auth(undefined, { type: SIGNIN });
    expect(state).toEqual(true);
  });

  it('signs out user', () => {
    const state = auth(true, { type:SIGNOUT });
    expect(state).toEqual(false);
  });
});