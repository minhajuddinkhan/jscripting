/**
 * Created by minhaj on 8/4/17.
 */
/**
 *
 * Let's consider a square grid with N rows and N columns, both numbered 1 through N.
 * Each cell contains one integer.
 * Let ri denote the minimum value in the i-th row, and let Ci denote the maximum value in the i-th column.
 * A grid is called nice if and only if the following condition holds true:

 max(r1, r2, ..., rN) = min(C1, C2, ..., CN)

 Chef has a square grid and can change some of its elements (numbers in the cells).
 Find the minimum possible number of elements Chef should change, so that the new grid is nice.

 An element can be changed to any integer.
 *
 * */

const twoDimensionalArray = [
  [3 ,7, 5, 1],
  [2, 6, 9, 8],
  [11, 19, 20, 6],
  [18, 0, 12, 21]
];


const rIs = (array) => {
  return array.map((rows) => {
    return Math.min.apply(null, rows);
  })
};

const cIs = (array) => {
  let i = 0, j = 0;
  let columns = [];
  let maxCis = [];
  for (i in array) {
    for (j in array) {
      columns.push(array[j][i]);
    }
    maxCis.push(Math.max.apply(null, columns));
    columns =[];
  }

  return maxCis;
};

const isGridNice = (maxRn, minCn) => {
  return maxRn == minCn;
}

let minimumRiS= (rIs(twoDimensionalArray));
let maximumCiS = (cIs(twoDimensionalArray));


let maxRi = Math.max.apply(null, minimumRiS);
let minCi = Math.min.apply(null, maximumCiS);




const maximumElements = (array) => {

  let linear =array.reduce((acc,rows) => {
    return acc.concat(rows);
  });

  let maximumNumbers = [];
  let maxNumbersRequired = array.length;
  let k = 0;
  while(k < maxNumbersRequired){
     const max = Math.max.apply(null, linear);
     maximumNumbers.push(max);
     linear.splice(linear.indexOf(max), 1);
     k++;
  }
  return maximumNumbers;

};


console.log(isGridNice(maxRi, minCi));
console.log(maximumElements(twoDimensionalArray));
