let firstNumber = +process.argv[2];
let secondNumber = +process.argv[3];
let thirdNumber = +process.argv[4];

const greatestOfThree = function(firstNumber,secondNumber,thirdNumber){
  let greatestNumber = firstNumber;
  if(secondNumber > greatestNumber){
    greatestNumber = secondNumber;
  }
  
  if(thirdNumber > greatestNumber){
    greatestNumber = thirdNumber;
  }
  return greatestNumber;
}

console.log(greatestOfThree(firstNumber,secondNumber,thirdNumber));
