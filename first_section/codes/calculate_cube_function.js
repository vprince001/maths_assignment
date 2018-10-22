let input = +process.argv[2];

const calcCube = function(input){
  let cube = input*input*input;
  return cube;
}

console.log(calcCube(input));
