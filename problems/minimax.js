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
  [18, 1, 12, 21]
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



const hashResult = (array) => {
  let obj = array.reduce((acc,elem,i) => {

    console.log(`${i}: ${acc[elem.row]}`)
    if(acc[elem.row] === undefined){
      acc[elem.row] = 0;
    }else {
      acc[elem.row] += 1;
    }
    return acc;

  },{});
  return Object.keys(obj);
};



const maximumElements = (array) => {

  let linear =array.reduce((acc,rows) => {
    return acc.concat(rows);
  });

  let maximumNumbers = [];
  let k = 0;
  while(k < array.length){
     const max = Math.max.apply(null, linear);
     maximumNumbers.push(max);
     linear.splice(linear.indexOf(max), 1);
     k++;
  }
  return maximumNumbers;

};

const findRows = (maxElems, array) => {
  return maxElems.map((element) => {
    for(i in array){
      for(j in array) {
        if(element === array[i][j]){
          return {row: `${i++}`, col: `${j++}`, element: element}
        }
      }
    }
  });
};


let minimumRiS= (rIs(twoDimensionalArray));
let maximumCiS = (cIs(twoDimensionalArray));
let maxRi = Math.max.apply(null, minimumRiS);
let minCi = Math.min.apply(null, maximumCiS);
if(!isGridNice(maxRi, minCi)){
  let maxElems =(maximumElements(twoDimensionalArray));
  let result = findRows(maxElems, twoDimensionalArray);
  result = hashResult(result);
  console.log(`${ twoDimensionalArray.length - result.length } steps required.`);
}else {
  console.log(`No steps required. The grid is already nice.`);
}
