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



class Node{

    constructor(value){
        this.connectsWith = [];
        this.value = value;
    }
    connectWith(Node){
        this.connectsWith.push(Node);
    }
    getConnections() {
        return this.connectsWith;
    }
    hasNodeInConnection(node) {

        return this.connectsWith.length ? this.connectsWith.find((Node) => {
              return node === Node.value
           } ) !== null : false ;
    }
}
class Graph {

    constructor(nodeMap){
        this.nodeMap = nodeMap;
    }
    joinNode(nodes){
        nodes = nodes.split(' ');
        this.nodeMap[nodes[0]].connectWith(this.nodeMap[nodes[1]]);
    }

    getBridges() {

        let returnBacks= [];
            let connectInitiator = this.nodeMap[2];     // connectInitiator = node: 1
            let connections = connectInitiator.getConnections(); //connections = [ 2 ]
            returnBacks = connections.map((connection) => {
                return find(connection, connectInitiator);
            });

            function find(current, nodeToFind) {
                    console.log(current.hasNodeInConnection(nodeToFind));
                if(current.hasNodeInConnection(nodeToFind)){
                    return true;
                }else{
                    let childConnections = current.getConnections();
                    if(childConnections.length){
                        for (let i = 0; i < current.getConnections().length; i++){
                            return find(current.getConnections()[i])
                        }
                    }else{
                        return false;
                    }

                }
            }
        }
}

function createInitialGraph(nodes){
    let graphMap = {};
    for(let i= 1; i <= nodes; i++) {
        graphMap[i] = new Node(i);
    }
    return new Graph(graphMap);
}



/**  Execution Here*/

let nodes = 3;
let inputs = ['1 2' ,'2 3', '3 1'];

let graph = createInitialGraph(nodes);
graph.joinNode(inputs[0]);
graph.joinNode(inputs[1]);
graph.getBridges();





