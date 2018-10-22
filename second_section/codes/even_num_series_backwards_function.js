let firstTerm = +process.argv[2];

const evenNumSeriesBackwards = function(firstTerm){
  let series = "";
  let seperator = "";
  for(let number=firstTerm; number>=0; number--){
    if(number%2 == 0){
      series += seperator + number;
      seperator = ","
    }
  }
  return series;
}

console.log(evenNumSeriesBackwards(firstTerm));
