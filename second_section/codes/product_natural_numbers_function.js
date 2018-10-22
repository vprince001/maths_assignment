let lastNumber = +process.argv[2];

const productNaturalNum = function(lastNumber){
  let product = 1;
  if(lastNumber == 0){
    product = 0
  }
  
  for(let number=1; number<=lastNumber; number++){
    product = product*number;
  }
  return product;
}

console.log(productNaturalNum(lastNumber));
