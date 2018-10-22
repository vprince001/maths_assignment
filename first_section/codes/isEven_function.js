let evenCandidate = +process.argv[2];

const isEven = function(evenCandidate){
  let number = "Not Even"
  if(evenCandidate%2==0){
  number = "Even"
  }
  return number;
}

console.log(isEven(evenCandidate));
