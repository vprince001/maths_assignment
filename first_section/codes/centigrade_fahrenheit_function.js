let centigrade = +process.argv[2];

const calcCentFah = function(centigrade){
  let fahrenheit = ((9/5)*centigrade)+32;
  return fahrenheit;
}

console.log(calcCentFah(centigrade));
