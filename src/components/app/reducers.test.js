import { loading, LOAD_START, LOAD_END } from './reducers';

describe('test loading reducers', () => {
  it('loading defaults to false', () => {
    const state = loading(undefined, {});
    expect(state).toEqual(false);
  });

  it('sets loading to true', ()=> {
    const state = loading(undefined, { type: LOAD_START });
    expect(state).toEqual(true);
  });

  it('sets loading state to false', () => {
    const state = loading(true, { type: LOAD_END });
    expect(state).toEqual(false);
  });
});