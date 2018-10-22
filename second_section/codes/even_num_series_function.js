let lastTerm = +process.argv[2];

const evenNumSeries = function(lastTerm){
  let series = "";
  let seperator = "";
  for(let number=0; number<=lastTerm; number++){
    if(number%2 == 0){
      series += seperator + number;
      seperator = ",";
    }
  }
  return series;
}

console.log(evenNumSeries(lastTerm));
