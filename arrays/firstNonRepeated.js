/**
 * Created by minhaj on 8/2/17.
 */

/**
 * How to find first non repeated value of a given Array?
 * */

const array = [1, 2, 2, 23, 534 ,1, 32 ,2 ,3 ,6];

let value = null;

for(i in array) {
    for(j in array) {
        if(array[i] === array[j] && i !== j) {
            break;
        }
    }
    if( i === j ){
        value = array[i];
        break;
    }
}

console.log('First non repeated value::', value);