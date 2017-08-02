##  Find the missing element with a single loop.
#### Range: 1-5 
 

```javascript

const array = [4,2,3,2];

const desired = array.reduce((acc, number, i) => {

    acc.sum += number;
    acc.count += i+1;

    return acc;
}, {sum: 0, count: 0});

const answer = desired.sum - desired.count;
console.log(answer);

```



 ## How to find first non repeated value of a given Array?
 
```javascript

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
```
