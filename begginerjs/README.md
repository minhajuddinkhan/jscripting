### Your task is to make two functions, max and min (maximum and minimum in PHP) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

 Examples
```
 max([4,6,2,1,9,63,-134,566]) returns 566
 min([-52, 56, 30, 29, -54, 0, -110]) returns -110
 max([5]) returns 5
 min([42, 54, 65, 87, 0]) returns 0
```
 You may consider that there will not be any empty arrays/vectors.

```javascript
const array = [4,6,2,1,9,63,-134,566]

const min = (array) => {
   return Math.min.apply(null, array);
};
const max = (array) => {
    return Math.max.apply(null, array);
};

console.log(`min :${min(array)}, max: ${max(array)}`);
```

### Define ``` to_alternating_case(char*) ``` such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase

```javascript
const string  = 'aBcD';

let stringToArray = string.split('');

let refactored = stringToArray.map((elem, i) => {
    let inverted = elem.toUpperCase();
    return (inverted === stringToArray[i]) ? stringToArray[i].toLowerCase() : inverted ;
});

console.log(refactored);
```


### Write a function ``` findNeedle() ``` that takes an array full of junk but containing one "needle"

 After your function finds the needle it should return a message (as a string) that says:

 ``` "found the needle at position " ``` plus the index it found the needle

 So

 ``` find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']) ```

 should return

``` 'found the needle at position 5' ```

```javascript

const array = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];

let index = null;
for(i in array){
    if(array[i] === 'needle') {
        index = i;
        break;
    }
}
index ? console.log(`found the needle at position ${index}`) : console.log('Not Found');
```


### Some people just have a first name; some people have first and last names and some people have first, middle and last names.

 You task is to initialize the middle names (if there is any).

 For example,
```
 'Jack Ryan' => 'Jack Ryan'
 'Lois Mary Lane' => 'Lois M. Lane'
 'Dimitri' => 'Dimitri'
 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
```

```javascript
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
```


### Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

 Example:

 ``` myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...]; ```
 None of the arrays will be empty, so you don't have to worry about that!


```javascript
const array = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];

let filtered = array.map((elem,i ) =>  i%2 === 0 ? elem : null)
.filter((elem) => !!elem);

console.log(filtered);
```
