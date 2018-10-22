let lengthOfSeries = +process.argv[2];

const fibonacci = function(lengthOfSeries){
  let firstNumber = 0;
  let secondNumber = 1;
  let thirdNumber = firstNumber+secondNumber;
  let series = "";
  series += firstNumber;
  
  for(let term=2; term<=lengthOfSeries; term++){
    series += ","+thirdNumber;
    thirdNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = thirdNumber;
  }
  return series;
}

console.log(fibonacci(lengthOfSeries));
