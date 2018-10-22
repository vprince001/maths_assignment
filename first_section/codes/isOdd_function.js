let oddCandidate = +process.argv[2];

const isOdd = function(oddCandidate){
  let number = "Odd"
  if(oddCandidate%2==0){
  number = "Not Odd"
  }
  return number;
}

console.log(isOdd(oddCandidate));
