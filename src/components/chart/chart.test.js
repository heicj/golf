import { createGraphData } from './actions';

describe('tests createGraphData function', () => {
  const rd1 = {
    comment: 'this is comment',
    course: 'chehalem glenn',
    date: '3-31-2020',
    differential: 1921,
    fir: [true, true, false, false, true, true, true, false, false, false, false, true, true, false, false, true, true, true],
    gir: [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    holeScore: [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    player: 'charlie',
    putts: [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    rating: '1',
    slope: '1',
    tee: 'white',
    totalFir: 10,
    totalGir: 1,
    totalPutts: 36,
    totalScore: 72,
    key: '1234'
  };

  const rd2 = {
    comment: 'this is comment for rd2',
    course: 'old macdonald',
    date: '7-2-2020',
    differential: 32,
    fir: [false, false, false, false, true, true, true, false, false, false, false, true, true, false, false, true, true, true],
    gir: [true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    holeScore: [3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    player: 'charlie',
    putts: [3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    rating: '1',
    slope: '1',
    tee: 'white',
    totalFir: 8,
    totalGir: 2,
    totalPutts: 38,
    totalScore: 71,
    key: '5678'
  };

  const singleRoundResult = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    datasets: [
      { label: 'FIR',
        backgroundColor:  'rgba(10, 20, 30, 20)',
        borderColor: 'rgba(10, 20, 30, 20)',
        data: [1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1 ,1, 1]
      },
      { label: 'GIR',
        backgroundColor: 'rgba(15, 25, 35, 25)', 
        borderColor: 'rgba(15, 25, 35, 25)', 
        data: [1, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      },
      { label: 'Putts',
        backgroundColor: 'rgba(20, 25, 40, 30)', 
        borderColor: 'rgba(20, 25, 40, 30)', 
        data: [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
      },
      { label: 'Score',
        backgroundColor: 'rgba(50, 20, 60, 20)',
        borderColor: 'rgba(50, 20, 60, 20)',
        data: [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
      }
    ]
  };

  const multipleRoundResult = {
    labels: ['3-31-2020 chehalem glenn', '7-2-2020 old macdonald'],
    datasets: [
      { label: 'FIR',
        backgroundColor:  'rgba(10, 20, 30, 20)',
        borderColor: 'rgba(10, 20, 30, 20)',
        data: [10, 8]
      },
      { label: 'GIR',
        backgroundColor: 'rgba(15, 25, 35, 25)', 
        borderColor: 'rgba(15, 25, 35, 25)', 
        data: [1, 2]
      },
      { label: 'Putts',
        backgroundColor: 'rgba(20, 25, 40, 30)', 
        borderColor: 'rgba(20, 25, 40, 30)', 
        data: [36, 38]
      },
      { label: 'Score',
        backgroundColor: 'rgba(50, 20, 60, 20)',
        borderColor: 'rgba(50, 20, 60, 20)',
        data: [72, 71]
      }
    ]
  };
 

  it('tests single round converstion', () => {
    const result = createGraphData([rd1]);
    expect(result).toEqual(singleRoundResult);
  });

  it('tests multi round result', () => {
    const result = createGraphData([rd1, rd2]);
    expect(result).toEqual(multipleRoundResult);
  });
  
});