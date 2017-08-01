/**
 * Created by minhaj on 8/1/17.
 */


class Node {

    constructor(){
        this.left = Node;
        this.right = Node;
        this.value = null;
    }
}

class Tree {

    constructor(){
        this.root = null
    }

    goLeft() {

    }

    goToRight() {

    }

    addNode (node) {
        if(this.root === null){
            this.root = new Node();
            this.root.value = node;
        }else {
            if(node.value < this.root.value){
                this.goLeft(node);
            }else if( node.value > this.root.value){
                this.goToRight(node);
            }
        }


    }
}

let tree = new Tree();

tree.addNode(23);



console.log(tree);



