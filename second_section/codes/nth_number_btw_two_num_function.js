let firstNumber = +process.argv[2];
let lastNumber = +process.argv[3];
let condition = +process.argv[4];

const nthNumBtwTwoNum = function(firstNumber,lastNumber,condition){
  let count = condition;
  let series = "";
  let seperator = "";

  for(let number=firstNumber; number<=lastNumber; number++){
    if(condition == count){
      series += seperator+number;
      count=0;
      seperator = ",";
    }
    count++;
  }
  return series;
}

console.log(nthNumBtwTwoNum(firstNumber,lastNumber,condition));
