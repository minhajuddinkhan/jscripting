/**
 * Created by minhaj on 8/6/17.
 */
/** Write a function findNeedle() that takes an array full of junk but containing one "needle"

 After your function finds the needle it should return a message (as a string) that says:

 "found the needle at position " plus the index it found the needle

 So

 find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

 should return

 'found the needle at position 5'*/


const array = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];

let index = null;
for(i in array){
    if(array[i] === 'needle') {
        index = i;
        break;
    }
}
index ? console.log(`found the needle at position ${index}`) : console.log('Not Found');