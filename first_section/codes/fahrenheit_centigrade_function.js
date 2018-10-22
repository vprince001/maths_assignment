let fahrenheit = +process.argv[2];

const convFahCen = function(fahrenheit){
  let centigrade = 5/9*(fahrenheit-32);
  return centigrade;
}

console.log(convFahCen(fahrenheit));
