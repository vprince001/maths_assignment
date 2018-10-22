let firstNumber = +process.argv[2];
let lastNumber = +process.argv[3];

const sumAnyNaturalNum = function(firstNumber,lastNumber){
  let sum = 0;
  
  for(let number=firstNumber; number<=lastNumber; number++){
    sum += number;
  }
  return sum;
}

console.log(sumAnyNaturalNum(firstNumber,lastNumber));
