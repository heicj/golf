import { wishlist, LOAD_WISHLIST, ADD_TO_WISHLIST } from './reducers';

describe('tests wishlist reducers', () => {
  it('wishlist default state is array', () => {
    const state = wishlist(undefined, {});
    expect(state).toEqual([]);
  });

  it('load reducer loads array', () => {
    const wl = [{}, {}];
    const state = wishlist(undefined, { type: LOAD_WISHLIST, payload: wl });
    expect(state).toEqual(wl);
  });

  it('adds new item to front of array', () => {
    const wl = [{}, {}];
    const newItem = { 'test': 'item' };
    const state = wishlist(wl, { type: ADD_TO_WISHLIST, payload: newItem });
    expect(state).toEqual([newItem, ...wl]);
  });
});