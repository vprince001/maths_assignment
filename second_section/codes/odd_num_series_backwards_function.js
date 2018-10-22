let firstTerm = +process.argv[2];

const oddNumSeriesBackwards = function(firstTerm){
  let series = "";
  let seperator = "";
  
  for(let number=firstTerm; number>=1; number--){
    if(number%2!=0){
      series += seperator + number;
      seperator = ","
    }
  }
  return series;
}

console.log(oddNumSeriesBackwards(firstTerm));
