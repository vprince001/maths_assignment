let input = +process.argv[2];

const findFactorial = function(input){
  let factorial = input;
  for(let number = input-1; number >= 2; number--){
    factorial = factorial * number;
  }
  return factorial;
}

console.log(findFactorial(input));
