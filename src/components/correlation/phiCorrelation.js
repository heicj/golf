export const phiCorrelation = (arr1bool, arr2bool) => {
  //https://en.wikipedia.org/wiki/Phi_coefficient
  let TP = 0;
  let FN = 0;
  let FP = 0;
  let TN = 0;

  for(let i = 0; i < arr1bool.length; i++){

    if(arr1bool[i] && arr2bool[i]) TP++;
    if(arr1bool[i] && !arr2bool[i]) FP++;
    if(!arr1bool[i] && arr2bool[i]) FN++;
    if(!arr1bool[i] && !arr2bool[i]) TN++;
  }

  let numerator = (TP * TN) - (FN * FP);
  let denominaotr = (TP + FP) * (FN + TN) * (TP + FN) * (FP + TN);
  let sqDenomiator = Math.sqrt(denominaotr);
  return (numerator / sqDenomiator).toFixed(3);
};