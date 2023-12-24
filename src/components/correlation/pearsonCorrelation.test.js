import { pearsonCorrelation, differnceBetweenEachNumAndArrayAvg, multiplyArrayIndexsAndSum, squareEachIndexOfArrayAndSum } from './pearsonCorrelation';

const x = [17, 13, 12, 15, 16, 14, 16, 16, 18, 19];
const y = [94, 73, 59, 80, 93, 85, 66, 79, 77, 91];



const average = array => array.reduce((a, b) => a + b) / array.length;


describe('test home component functions', () => {

  it('average function returns correct average value', () => {
    expect(average(x).toFixed(2)).toEqual('15.60');
  });

  it('formula to find x-xbar and y-ybar', () => {
    const xminusXbar = differnceBetweenEachNumAndArrayAvg(x, '15.6');
    expect(xminusXbar).toEqual(['1.4', '-2.6', '-3.6', '-0.6', '0.4', '-1.6', '0.4', '0.4', '2.4', '3.4']);
  });

  it('x-xbar times y-ybar sum ', () => {

    const xminusXbar = differnceBetweenEachNumAndArrayAvg(x, '15.6');
    const yminusYbar = differnceBetweenEachNumAndArrayAvg(y, '79.7');
    let sn = multiplyArrayIndexsAndSum(xminusXbar, yminusYbar);
    expect(sn).toEqual('134.8');

  });

  it('square each index of number and sum', () => {
    const xminusXbar = differnceBetweenEachNumAndArrayAvg(x, '15.6');
    const s = squareEachIndexOfArrayAndSum(xminusXbar);
    expect(s.toFixed(1)).toEqual('42.4');
  });

  it('testing pearsonCorrelation function', () => {
    // const xbar = average(x).toFixed(2);
    // const ybar = average(y).toFixed(2);

    // const xMinusXbar = differnceBetweenEachNumAndArrayAvg(x, xbar);
    // const yMinusYbar = differnceBetweenEachNumAndArrayAvg(y, ybar);
    // const sumOfXMinusXbarTimesYMinusYBar = multiplyArrayIndexsAndSum(xMinusXbar, yMinusYbar);
    let r = pearsonCorrelation(x, y);
    expect(r.toFixed(3)).toEqual('0.596');

  });

});