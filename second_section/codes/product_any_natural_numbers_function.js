let firstNumber = +process.argv[2];
let lastNumber = +process.argv[3];

const productAnyNaturalNum = function(firstNumber,lastNumber){
  let product = 1;
  
  for(let number=firstNumber; number<=lastNumber; number++){
    product = product*number;
  }
  return product;
}

console.log(productAnyNaturalNum(firstNumber,lastNumber));
