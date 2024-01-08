import { phiCorrelation } from "./phiCorrelation";

let arr1bool = [true, true, true, false, false];
let arr2bool = [true, true, false, false, false];

describe('test phi correlation function', () => {

  it('function returns phi correlation', () => {
    expect(phiCorrelation(arr1bool, arr2bool)).toEqual('0.667');

  });

  it('second test of phi correlation', () => {
    const arr1 = [true, true, true, true, true, true, true, true, false, false, false, false];
    const arr2 = [false, false, true, true, true, true, true, true, false, false, false, true];

    expect(phiCorrelation(arr1, arr2)).toEqual('0.478');
  })
});