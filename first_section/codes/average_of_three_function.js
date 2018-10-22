let firstNumber = +process.argv[2];
let secondNumber = +process.argv[3];
let thirdNumber = +process.argv[4];

const averageThreeNumber = function(firstNumber,secondNumber,thirdNumber){
  let average = (firstNumber+secondNumber+thirdNumber)/3;
  return average;
}

console.log(averageThreeNumber(firstNumber,secondNumber,thirdNumber));
