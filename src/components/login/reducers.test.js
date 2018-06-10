import { auth, SIGNIN } from './reducers';

describe('test initial auth state', () => {
  it('auth initializes as false', () => {
    const state = auth(undefined, {});
    expect(state).toEqual(false);
  });

  it('change login to true when LOGIN', () => {
    const state = auth(undefined, { type: SIGNIN });
    expect(state).toEqual(true);
  });
});