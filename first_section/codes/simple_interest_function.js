let amount = +process.argv[2];
let ratePercent = +process.argv[3];
let timeInYears = +process.argv[4];

const calcSimpleInterest = function(amount,ratePercent,timeInYears){
  let simpleInterest = (amount*ratePercent*timeInYears)/100;
  return simpleInterest;
}

console.log(calcSimpleInterest(amount,ratePercent,timeInYears));
