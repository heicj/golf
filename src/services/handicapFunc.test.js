import { handicap } from './handicapFunc';

describe('tests handicap function', () => {
  it('tests when array of rounds is empty', () => {
    const rounds = [];
    const handicapResult = handicap(rounds);
    expect(handicapResult).toEqual('NA');
  });

  it('test when rounds is less than 5', () => {
    const rounds = [{ 'differential': 12 }, { 'differential': 8 }];
    const handicapResult = handicap(rounds);
    expect(handicapResult).toEqual('7.68');
  });

  it('tests when rounds is between 10 and 20', () => {
    const rounds = [{ 'differential': 8 }, { 'differential': 7 }, { 'differential': 9 }, { 'differential': 10 }, { 'differential': 13 }, { 'differential': 7 }, { 'differential': 11 }, { 'differential': 7 }, { 'differential': 14 }, { 'differential': 9 }, { 'differential': 10 }, { 'differential': 10 }];
    const handicapResult = handicap(rounds);
    expect(handicapResult).toEqual('7.30');
  });

  it('tests handicap when rounds is > than 20', () => {
    const rounds = [{ 'differential': 8 }, { 'differential': 7 }, { 'differential': 9 }, { 'differential': 10 }, { 'differential': 13 }, { 'differential': 7 }, { 'differential': 11 }, { 'differential': 7 }, { 'differential': 14 }, { 'differential': 9 }, { 'differential': 10 }, { 'differential': 10 },
      { 'differential': 9 }, { 'differential': 6 }, { 'differential': 10 }, { 'differential': 5 }, { 'differential': 9 }, { 'differential': 14 }, { 'differential': 15 }, { 'differential': 5 }, { 'differential': 9 }, { 'differential': 8 }];
    const handicapResult = handicap(rounds);
    expect(handicapResult).toEqual('6.82');
  });
});