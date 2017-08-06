/**
 * Created by minhaj on 8/6/17.
 */
/**
 *
 * Some people just have a first name; some people have first and last names and some people have first, middle and last names.

 You task is to initialize the middle names (if there is any).

 For example,

 'Jack Ryan' => 'Jack Ryan'
 'Lois Mary Lane' => 'Lois M. Lane'
 'Dimitri' => 'Dimitri'
 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'*/

const name = 'Alice Betty Catherine Davis';

let positions = name.split(' ');

let filtered = positions.reduce((acc, position, i) => {
    if( i === positions.length-1 || i === 0){
      acc += position + ' ';
    }else
    {
        acc+= `${position.charAt(0)}. `
    }
    return acc;
},'');

console.log(filtered);