# jscripting
simple programming tasks with javascript. Helpful for interview questions

# some stupid example like this one.

```javascript
/**
 *  Range: 1-5
 *
 *  Find the missing element with a single loop.
 * */
const array = [4,2,3,2];

const desired = array.reduce((acc, number, i) => {

    acc.sum += number;
    acc.count += i+1;

    return acc;
}, {sum: 0, count: 0});

const answer = desired.sum - desired.count;
console.log(answer);
```
