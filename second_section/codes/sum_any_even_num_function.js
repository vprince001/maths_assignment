let firstNumber = +process.argv[2];
let lastNumber = +process.argv[3];

const sumEvenBtwTwoNum = function(firstNumber,lastNumber){
  let sum = 0;

  for(let number=firstNumber; number<=lastNumber; number++){
    if(number%2==0){
      sum += number;
    }
  }
  return sum;
}

console.log(sumEvenBtwTwoNum(firstNumber,lastNumber));
