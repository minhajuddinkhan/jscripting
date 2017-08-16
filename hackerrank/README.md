# Graphs are cool

### Write a program that will help to identify the number of bridges in a graph.

 Consider a graph of ``` X``` vertices, labeled as ```0 to X - 1```.
 At the start, graph has no edge.Later on undirected edges ```(u, v)``` are added to the graph ```(0 <= u, v <= X - 1)```.
 After adding an edge, you must print out the current number of bridges in the graph.

 N.B: For test case,  an edge that is already added will not be added again, nor will there be a self-loop
  In graph theory, a bridge, isthmus, cut-edge, or cut arc is an edge of a graph whose deletion increases its number of connected components. Equivalently, an edge is a bridge if and only if it is not contained in any cycle.

### what the heck is a bridge?
A bridge of a connected graph is ah edge whose removal disconnects the graph
(breaks one into multiple graphs) 


##### Input:

```
 Each test case begins with 2 integers J (1 <= J <= 50000)
 and L (1 <= L <= 100000),
 followed by L lines, each line contains a pair of integers (u, v) that represents a request
 to add an edge (u, v) to the graph.
 ```
 ##### Output:
 
 ```
 
 After each request, print out the current number of bridges in the graph on a separate line.
```
### code

```javascript
function createInitialMatrix(rows, columns) {
    let matrix = [];

    for(let i = 0; i< rows; i++){
        let row = [];
        matrix.push(row);
        for(let j = 0; j < columns; j++){
            matrix[i].push(0);
        }
    }
    return matrix;

}

function getNumberOfBridges(matrix) {
    let edges = findEdges(matrix);
    console.log(matrix);
    console.log('matrix=============');
    return edges.map((edge) => { //true means the edge was a bridge.

        console.log('breaking edge', edge);
        let mutated =  getMutatedMatrix(JSON.parse(JSON.stringify(matrix)), edge);
        console.log(mutated);
        console.log('muatated==============');

        let  { rowE1, rowE2 } = readByRow(mutated, edge);
        console.log('read by rowws of edge  '+ edge+ ' is ' , rowE1, rowE2);
        let { columnE1, columnE2 } = readByColumn(mutated, edge);
    });
}


function readByRow(mutatedMatrix, edge) {

    let rowE1 = mutatedMatrix[edge.split(" ")[0]];
    let rowE2 = mutatedMatrix[edge.split(" ")[1]];

    rowE1 = rowE1.reduce((acc, elem) => acc + elem, 0);
    rowE2 = rowE2.reduce((acc, elem) => acc + elem, 0);

    return {
        rowE1,
        rowE2
    }
}

function readByColumn(mutatedMatrix, edge) {

    const c1 = edge.split(" ")[0];
    const c2 = edge.split(" ")[1];

    let columnE1 = [];
    let columnE2 = [];


    for(let i = 0; i < mutatedMatrix.length; i++){
        columnE1.push(mutatedMatrix[i][c1]);
        columnE2.push(mutatedMatrix[i][c2]);
    }

    columnE1  = columnE1.reduce((acc, elem) => acc + elem, 0);
    columnE2 = columnE2.reduce((acc, elem) => acc + elem, 0);

    return {
        columnE1,
        columnE2
    }
}
function findEdges(matrix) {
    let edges = [];
    for(let i = 0; i< matrix.length; i++){
        for(let j = 0; j < matrix.length; j++){

            if(matrix[i][j] === 1){
                if(!edges.find((o) => o.split("").reverse().join("") === `${i} ${j}`))
                    edges.push(`${i} ${j}`)
            }

        }
    }
    return edges;
}

function getMutatedMatrix(matrix, edge) {

    const vX = edge.split(" ")[0];
    const vY = edge.split(" ")[1];
    matrix[vX][vY]= 0;
    matrix[vY][vX]= 0;
    return matrix;
}


function joinEdge(vX, vY) {
    matrix[vX][vY]= 1;
    matrix[vY][vX]= 1;
    return matrix;

}


const input = `3
0 1
1 2`;

const numberOfVertices = input.split('\n')[0];
const queries = input.split('\n').map((row, i) => input.split('\n')[i+1]).filter((row) => !!row);
let matrix = (createInitialMatrix(numberOfVertices, numberOfVertices));

queries.map((query) => {
    joinEdge.apply(null, query.split(' '));
    (getNumberOfBridges(matrix));

})

# Ice cream time!

Each time Sunny and Johnny take a trip to the Ice Cream Parlor, they pool together  dollars for ice cream. On any given day, the parlor offers a line of  flavors. Each flavor, , is numbered sequentially with a unique ID number from  to  and has a cost, , associated with it.

Given the value of  and the cost of each flavor for  trips to the Ice Cream Parlor, help Sunny and Johnny choose two flavors such that they spend their entire pool of money () during each visit. For each trip to the parlor, print the ID numbers for the two types of ice cream that Sunny and Johnny purchase as two space-separated integers on a new line. You must print the smaller ID first and the larger ID second.

Note: Two ice creams having unique IDs  and  may have the same cost (i.e., ).

Input Format

The first line contains an integer, , denoting the number of trips to the ice cream parlor. The  subsequent lines describe all of Sunny and Johnny's trips to the parlor; each trip is described as follows:

The first line contains .
The second line contains .
The third line contains  space-separated integers denoting the cost of each respective flavor. The  integer corresponding to the cost, , for the ice cream with ID number  (where ).
Constraints

, where
It is guaranteed that there will always be a unique solution.
Output Format

Print two space-separated integers denoting the respective ID numbers for the flavors they choose to purchase, where the smaller ID is printed first and the larger ID is printed second. Recall that each ice cream flavor has a unique ID number in the inclusive range from  to .

Sample Input

2
4
5
1 4 5 3 2
4
4
2 2 4 3
Sample Output

1 4
1 2

```
