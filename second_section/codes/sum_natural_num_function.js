let lastNumber = +process.argv[2];

const sumNaturalNum = function(lastNumber){
  let sum = 0;
  
  for(let number=1; number<=lastNumber; number++){
    sum += number;
  }
  return sum;
}

console.log(sumNaturalNum(lastNumber));
