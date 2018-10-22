let lastTerm = +process.argv[2];

const oddNumSeries = function(lastTerm){
  let series = "";
  let seperator = "";
  for(let number=1; number<=lastTerm; number++){
    if(number%2 != 0){
      series += seperator+number;
      seperator = ",";
    }
  }
  return series;
}

console.log(oddNumSeries(lastTerm));
