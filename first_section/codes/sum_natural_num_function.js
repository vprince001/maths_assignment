let input = +process.argv[2];

const sumNaturalNum = function(input){
  let sum = (input*(input+1))/2;
  return sum;
}

console.log(sumNaturalNum(input));
