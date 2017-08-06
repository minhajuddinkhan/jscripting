/**
 * Created by minhaj on 8/6/17.
 */

/**
 *
 * Define to_alternating_case(char*) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase*/


const string  = 'aBcD';

let stringToArray = string.split('');

let refactored = stringToArray.map((elem, i) => {
    let inverted = elem.toUpperCase();
    return (inverted === stringToArray[i]) ? stringToArray[i].toLowerCase() : inverted ;
});

console.log(refactored);