import { courseSortedStatsFunc, courseHoleAverage } from './actions';

describe('tests func that sorts stats by course', () => {
  const allRounds = {
    1234: {
      'course': 'c1',
      'fir': [true, true, true, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false],
      'totalFir': 5,
      'gir': [true, true, true, false, false, false, false, true, true, true, true, true, false, false, false, false, false, false],
      'totalGir': 8,
      'putts': [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1],
      'totalPutts': 34,
      'holesScore': [4, 4, 6, 5, 4, 4, 4, 6, 5, 5, 5, 6, 4, 4, 4, 3, 3, 4],
      'totalScore': 80
    },

    5678: {
      'course': 'c2',
      'fir': [true, true, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false],
      'totalFir': 2,
      'gir': [true, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false],
      'totalGir': 3,
      'putts': [3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      'totalPutts': 38,
      'holesScore': [4, 5, 6, 5, 5, 6, 4, 6, 6, 5, 5, 6, 4, 4, 4, 3, 3, 4],
      'totalScore': 85
    },

    4321: {
      'course': 'c1',
      'fir': [true, true, false, false, false, true, true, false, true, true, false, false, false, false, false, false, false, false],
      'totalFir': 6,
      'gir': [true, true, true, true, true, true, true, false, true, true, false, false, false, false, false, false, false, false],
      'totalGir': 9,
      'putts': [2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      'totalPutts': 35,
      'holesScore': [4, 5, 6, 5, 5, 6, 4, 4, 6, 5, 5, 4, 4, 4, 4, 3, 3, 4],
      'totalScore': 81
    },

    8765: {
      'course': 'c2',
      'fir': [true, true, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false],
      'totalFir': 4,
      'gir': [false, false, false, true, true, true, true, false, true, true, false, false, false, false, false, false, false, false],
      'totalGir': 6,
      'putts': [2, 2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      'totalPutts': 33,
      'holesScore': [4, 5, 6, 5, 3, 6, 4, 6, 6, 5, 5, 6, 4, 4, 4, 3, 3, 4],
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

  const fullRound1 = {
    'course': 'test',
    'holesScore': [3, 4, 3, 4, 5, 5, 4, 5, 3, 3, 4, 4, 5, 4, 4, 3, 4, 5],
    'putts': [2, 2, 2, 2, 3, 1, 2, 2, 2, 3, 2, 1, 3, 2, 2, 1, 2, 2],
    'player': 'Charlie',
    'tee': 'blue',
    'fir': [true, true, false, false, true, true, true, false, false, true, true, true, false, false, true, false, false, false],
    'gir': [true, true, false, true, true, true, true, false, false, false, true, true, false, true, true, false, false, true]
  };

  const fullRound2 = {
    'course': 'test',
    'holesScore': [4, 5, 2, 4, 3, 5, 4, 6, 3, 3, 4, 4, 5, 4, 4, 3, 4, 5],
    'putts': [2, 1, 2, 3, 3, 1, 2, 2, 4, 3, 2, 1, 3, 2, 2, 1, 2, 2],
    'player': 'Charlie',
    'tee': 'blue',
    'fir': [false, true, true, false, true, true, true, false, false, true, true, true, false, false, true, false, false, false],
    'gir': [true, false, false, true, true, true, true, false, false, false, true, true, false, true, true, true, false, true]
  };

  const allFullRounds = {
    fullRound1,
    fullRound2
  }

  it('tests function', () => {
    const results = courseSortedStatsFunc(allRounds);
    expect(results['c1'].score).toEqual(expected['c1'].score);
  });
  
  it('tests that one course stat arr is right length', () => {
    const results = courseSortedStatsFunc(allRounds);
    expect(results.c1.fir.length).toEqual(2);
    expect(results.c1.fir).toEqual([5, 6]);
  });
  
  it('tests that property exists on result', () => {
    const results = courseSortedStatsFunc(allRounds);
    expect(results.c2.hasOwnProperty('putts')).toEqual(true);
  });

  it('tests results have both keys', () => {
    const results = courseSortedStatsFunc(allRounds);
    expect(Object.keys(results)).toEqual(['c1', 'c2']);
  });

  it('tests indivdual hole stat accum', () => {
    const results = courseHoleAverage(allFullRounds);
    expect(results.test.onefir).toEqual([true, false]);
    expect(results.test.eighteenputts).toEqual([2, 2]);
    expect(results.test.onefiravg).toEqual(.5);
    expect(results.test.eighteenputtsavg).toEqual(2);
  });

  it('tests individual hole accum for multiple courses', () => {
    const results = courseHoleAverage(allRounds);
    expect(results['c1'].onefiravg).toEqual(1);
    expect(results['c2'].onegiravg).toEqual(.5);
  });
});