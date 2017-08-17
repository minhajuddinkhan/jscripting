/**
*
*
* Each time Sunny and Johnny take a trip to the Ice Cream Parlor, they pool together  dollars for ice cream.
* https://www.hackerrank.com/challenges/icecream-parlor
*
*/
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

tours.forEach((tour) => {

  ///console.log(fetchSelections(tour.varities.split(' '), tour.pool));
});



function fetchSelections(array, sum) {


/*
  let hash = array.reduce((acc, elem, i) => {
    acc[elem] = i;
    return acc;
  }, {});

  for (let i = 0; i < array.length; i++) {
    if (hash[sum - array[i]] != i) {
      console.log(`${i + 1} ${ parseInt(array[hash[sum - array[i]]]) + 1}`);
      break;

    }
  }
*/
}



let yolo = [1, 4, 5, 3, 2];


let res = yolo.map(() => {
  let yolo2 = (JSON.parse(JSON.stringify(yolo)))
  yolo2.push(yolo2[0]);
  yolo2.splice(0,1);
  yolo = yolo2;
  return yolo2;
});

console.log(res);



