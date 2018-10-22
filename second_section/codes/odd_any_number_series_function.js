let firstNumber = +process.argv[2];
let lastNumber = +process.argv[3];

const oddAnyNumSeries = function(firstNumber,lastNumber){
  let series = "";
  let seperator = "";
  for(let number=firstNumber; number<=lastNumber; number++){
    if(number%2 != 0){
      series += seperator + number;
      seperator = ","
    }
  }
  return series;
}

console.log(oddAnyNumSeries(firstNumber,lastNumber));
