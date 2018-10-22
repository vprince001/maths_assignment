let input = +process.argv[2];

const calcSquare = function(input){
  let square = input*input;
  return square;
}

console.log(calcSquare(input));
