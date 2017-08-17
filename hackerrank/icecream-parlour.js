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

getTours(input)
  .map((tour) => twoSum(tour.varities.split(' ').map((elem) => +elem), +tour.pool))
  .map((elem) => `${ elem[0]} ${elem[1]}`)
  .forEach((elem) => console.log(elem));



function twoSum(nums, target_num) {
  let map = [];
  let indexnum = [];
  let x;
  for (x = 0; x < nums.length; x++)
  {
    if (map[nums[x]] != null)
    {
      index = map[nums[x]];
      indexnum[0] = index+1;
      indexnum[1] = x+1;
      break;
    }
    else
    {
      map[target_num - nums[x]] = x;
    }
  }
  return indexnum;
}





