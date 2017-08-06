/**
 * Created by minhaj on 8/6/17.
 */

/**
 * Your task is to make two functions, max and min (maximum and minimum in PHP) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

 #Examples

 max([4,6,2,1,9,63,-134,566]) returns 566
 min([-52, 56, 30, 29, -54, 0, -110]) returns -110
 max([5]) returns 5
 min([42, 54, 65, 87, 0]) returns 0
 #Notes

 You may consider that there will not be any empty arrays/vectors.*/

const array = [4,6,2,1,9,63,-134,566]

const min = (array) => {
   return Math.min.apply(null, array);
};
const max = (array) => {
    return Math.max.apply(null, array);
};

console.log(`min :${min(array)}, max: ${max(array)}`);
