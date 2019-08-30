//calculate handicap

// number of rounds    differential calculation
// 5-10       ->    lowest differential x .96
//11-19       ->    avg lowest 3-5 differentials x .96
//20          ->    avg lowest 10 differentials x .96
export function handicap(rounds){
  let differentialCount = 0;
  Object.keys(rounds).map(key => {
    if(rounds[key].differential){
      differentialCount++;
    }
  });
  if(differentialCount == 0 || rounds == null || rounds == undefined) return 'NA';

  let roundsToUse = 0;
  let numberOfRounds = differentialCount;

  if(numberOfRounds < 10) roundsToUse = 1;
  if(numberOfRounds > 10 && numberOfRounds < 20) roundsToUse = 5;
  if(numberOfRounds > 20) roundsToUse = 10;
  
  const sortedDifferentials = Object.keys(rounds).map(key => rounds[key].differential).sort(function(a, b){return a - b; });
  const differentialsToUse = sortedDifferentials.slice(0, roundsToUse);

  let total = differentialsToUse.reduce((a, c) => a + c);
  let avg = total / roundsToUse;
  return (avg * .96).toFixed(2);
}