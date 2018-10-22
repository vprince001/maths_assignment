let sum = +process.argv[2];
let ratePersent = +process.argv[3];
let timeInYears = +process.argv[4];

const calcCompoundInterest = function(sum,ratePersent,timeInYears){
  let compoundInterest = sum*Math.pow(1+(ratePersent/100),timeInYears)-sum;
  compoundInterest = Math.floor(compoundInterest);
  return compoundInterest;
}

console.log(calcCompoundInterest(sum,ratePersent,timeInYears));
