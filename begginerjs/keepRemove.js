/**
 * Created by minhaj on 8/6/17.
 */
/**
 * Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

 Example:

 myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
 None of the arrays will be empty, so you don't have to worry about that!
 * */


const array = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];

let filtered = array.map((elem,i ) =>  i%2 === 0 ? elem : null)
.filter((elem) => !!elem);

console.log(filtered);