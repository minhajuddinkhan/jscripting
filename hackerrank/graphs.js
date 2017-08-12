/** Statement:
Write a program that will help to identify the number of bridges in a graph.
Consider a graph of X vertices, labeled as 0 to X - 1.
At the start, graph has no edge.Later on undirected edges (u, v) are added to the graph (0 <= u, v <= X - 1).
After adding an edge, you must print out the current number of bridges in the graph.
 
N.B: For test case,  an edge that is already added will not be added again, nor will there be a self-loop
Input:
Each test case begins with 2 integers J (1 <= J <= 50000)
and L (1 <= L <= 100000),
followed by L lines, each line contains a pair of integers (u, v) that represents a request
to add an edge (u, v) to the graph.
Output:
After each request, print out the current number of bridges in the graph on a separate line. */


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

const input = `3
1 2`;

const numberOfVertices = input.split('\n')[0];
const queries = input.split('\n').map((row, i) => input.split('\n')[i+1]).filter((row) => !!row);
let matrix = (createInitialMatrix(numberOfVertices, numberOfVertices));
