let tableNumber = +process.argv[2];

const generateTable = function(tableNumber){
  table = "";
  newline = "";
  multiples = 0;
  for(let count=1; count<=10; count++){
    multiples = tableNumber * count;
    table += newline + tableNumber + "*" + count + "=" + multiples;
    newline = "\n";
  }
  return table;
}

console.log(generateTable(tableNumber));
