let firstNumber = +process.argv[2];
let secondNumber = +process.argv[3];

const findHcf = function(firstNumber, secondNumber){
  let hcf = 0;
  let loopCount = firstNumber;
  if(firstNumber > secondNumber){
  loopCount = secondNumber;
  }
  
  for(let index=1; index<=loopCount; index++){
    if(firstNumber%index==0 && secondNumber%index==0){
      hcf = index;
    }
  }
  return hcf;
}

console.log(findHcf(firstNumber,secondNumber));
