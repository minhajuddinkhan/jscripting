

const twoDimensionalArray = [
  [10, 20, 10],
  [20, 10, 5],
  [30, 30, 35]
];

const hashResult = (array) => {
  let obj = array.reduce((acc,elem) => {
    if(acc[elem.row] === undefined){
      acc[elem.row] = 0;
    }else {
      acc[elem.row] += 1;
    }
    return acc;

  },{});
  return Object.keys(obj);
};


let linear = twoDimensionalArray.reduce((acc,rows) => {
  return acc.concat(rows);
});

const original = linear.slice();

const maxRequired = twoDimensionalArray.length;

let maximumNumbers = [];
let k = 0;
while(k < maxRequired){
  const max = Math.max.apply(null, linear);
  maximumNumbers.push(max);
  linear.splice(linear.indexOf(max), 1);
  k++;
}

let result = [];

for(i of maximumNumbers){
   result.push(recursive(0, original.indexOf(i)));
}
console.log(result);
//result = hashResult(result);
//console.log(`${ twoDimensionalArray.length - result.length } steps required.`);

function recursive(callNum, val) {
  val = val - twoDimensionalArray.length;
  if(val >= 0){
    return recursive(++callNum, val)
  }
  else{
    val = val + twoDimensionalArray.length;
    return {row: callNum, col: val}
  }
}

