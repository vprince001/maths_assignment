let firstNumber = +process.argv[2];
let lastNumber = +process.argv[3];

const evenAnyNumSeries = function(firstNumber,lastNumber){
  let series = "";
  let seperator = "";
  for(let number=firstNumber; number<=lastNumber; number++){
    if(number%2 == 0){
      series += seperator + number;
      seperator = ","
    }
  }
  return series;
}

console.log(evenAnyNumSeries(firstNumber,lastNumber));
