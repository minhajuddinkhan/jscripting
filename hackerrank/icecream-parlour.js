/**
 *
 *
 * Each time Sunny and Johnny take a trip to the Ice Cream Parlor, they pool together  dollars for ice cream.
 * https://www.hackerrank.com/challenges/icecream-parlor
 * */

const input = `2
4
5
1 4 5 3 2
4
4
2 2 4 3`;



function getTours(input) {
  let tours = [];
  let count = 1;
  const splitter =  input.split('\n');
  for(let i = 0; i < splitter[0]; i++){
    tours[i] = {
      pool: splitter[count++],
      iceCream: splitter[count++],
      varities: splitter[count++]
    };
  }
  return tours;
}

let tours = getTours(input);
console.log(tours);


