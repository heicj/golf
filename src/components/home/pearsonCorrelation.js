
const average = array => array.reduce((a,b) => a + b) / array.length;

export const differnceBetweenEachNumAndArrayAvg = (array, avg) => array.map(numb => (numb - avg).toFixed(1));

export const multiplyArrayIndexsAndSum = (arr1, arr2) => {
  let total = 0;
  for(let i = 0; i< arr1.length; i++){
    let num = arr1[i] * arr2[i];
    total += num;
  }
  return total.toFixed(1);
};

export const squareEachIndexOfArrayAndSum = (arr) => arr.map((num) => num * num).reduce((a, b) => a + b);

export function pearsonCorrelation(arr1, arr2){

  //pearson correlation coefficient (r)
  //       Sum( x - xBar )(y - yBar)
  //   r= -----------------------
  //       sqrt(sum(x-xbar)squared  * sum(y-ybar)squared)

  //youtube Eugene O'loughlin How to Calculate Pearson's Correlation Coefficinet (r) by hand
  
  const xbar = average(arr1);
  const ybar = average(arr2);
  const xMinusXBar = differnceBetweenEachNumAndArrayAvg(arr1, xbar);
  const yMinusYBar = differnceBetweenEachNumAndArrayAvg(arr2, ybar);
  const sumOfXMinusXbarTimesYMinusYBar = multiplyArrayIndexsAndSum(xMinusXBar, yMinusYBar)
  const sumOfXMinusXBar = squareEachIndexOfArrayAndSum(xMinusXBar);
  const sumOfYMinusYBar = squareEachIndexOfArrayAndSum(yMinusYBar);

  const denominator = sumOfXMinusXBar * sumOfYMinusYBar;
  const squareOfDenominator = Math.sqrt(denominator);

  const r = sumOfXMinusXbarTimesYMinusYBar / squareOfDenominator;
  return r;

}