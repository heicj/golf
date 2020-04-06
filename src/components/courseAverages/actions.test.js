import { courseSortedStats } from './actions';

describe('tests func that sorts stats by course', () => {
  const allRounds = {
    1234: {
      'course': 'c1',
      'totalFir': 5,
      'totalGir': 8,
      'totalPutts': 34,
      'totalScore': 80
    },

    5678: {
      'course': 'c2',
      'totalFir': 2,
      'totalGir': 3,
      'totalPutts': 38,
      'totalScore': 85
    },

    4321: {
      'course': 'c1',
      'totalFir': 6,
      'totalGir': 9,
      'totalPutts': 35,
      'totalScore': 81
    },

    8765: {
      'course': 'c2',
      'totalFir': 4,
      'totalGir': 6,
      'totalPutts': 33,
      'totalScore': 79
    }
  };

  const expected = {
    'c1': {
      'fir': [5, 6],
      'gir': [8, 9],
      'putts': [34, 35],
      'score': [80, 81]
    },

    'c2': {
      'fir': [2, 4],
      'gir': [3, 6],
      'putts': [38, 33],
      'score': [85, 79]
    }
  };

  it('tests function', () => {
    const results = courseSortedStats(allRounds);
    expect(results).toEqual(expected);
  });
  
  it('tests that one course stat arr is right length', () => {
    const results = courseSortedStats(allRounds);
    expect(results.c1.fir.length).toEqual(2);
    expect(results.c1.fir).toEqual([5, 6]);
  });
  
  it('tests that property exists on result', () => {
    const results = courseSortedStats(allRounds);
    expect(results.c2.hasOwnProperty('putts')).toEqual(true);
  });

  it('tests results have both keys', () => {
    const results = courseSortedStats(allRounds);
    expect(Object.keys(results)).toEqual(['c1', 'c2']);
  });
});