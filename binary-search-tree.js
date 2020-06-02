'use strict';
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class QNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value){
        let newNode = new QNode(value);
        if(this.size === 0){
            this.first = newNode;
        } else{
            this.last.next = newNode;
        }
        this.last = newNode;
        this.size++;
        return this.size;
    }

    dequeue(){
        if(this.size === 0) return null; // nothing to dequeue
        let nodeToRemove = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        } else{
            this.first = nodeToRemove.next;
        }
        this.size--;
        return nodeToRemove;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null; 
    }
    insert(value){
        let newNode = new Node(value);
        if(this.root === null){ // edge case
            this.root = newNode; 
            return this;
        } 
        return insertNode(this.root,newNode);
        function insertNode(root,newNode){
            if(newNode.value < root.value){
                if(root.left === null){
                    root.left = newNode;
                    return this;
                } else{
                    return insertNode(root.left,newNode);
                }
            }
            if(newNode.value > root.value){
                if(root.right === null){
                    root.right = newNode;
                    return this;
                } else {
                    return insertNode(root.right,newNode);
                }
            }
            return undefined;
        }
    }

    find(value){
        return findValueAtNode(value,this.root);
        function findValueAtNode(value,node){
            debugger;
            if(value === node.value) return node;
            if(value<node.value && node.left) return findValueAtNode(value,node.left);
            if(value>node.value && node.right) return findValueAtNode(value,node.right);
        }
    }
    // Breadth First Search
    breadthFirstSearach(){
        let nodeQ = new Queue();
        let nodeValues = [];
        nodeQ.enqueue(this.root);
        while(nodeQ.size > 0){
            let currentNode = nodeQ.dequeue();
            nodeValues.push(currentNode.value.value);
            if(currentNode.value.left) nodeQ.enqueue(currentNode.value.left);
            if(currentNode.value.right) nodeQ.enqueue(currentNode.value.right);
            console.log(`nodeQ.size: ${nodeQ.size}`);

        }
        return nodeValues;
    }

    depthFirstSearchPreOrder(){
        let nodeValues = [];
        let current = this.root;
        function traverse(node){
            nodeValues.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return nodeValues;
    }

    depthFirstSearchInOrder(){
        let nodeValues = [];
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            nodeValues.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return nodeValues;
    }

    depthFirstSearchPostOrder(){
        let nodeValues = [];
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            nodeValues.push(node.value);
        }
        traverse(this.root);
        return nodeValues;
    }
    
    print(){
        printNode(this.root);
        function printNode(nodeToPrint){
            if(nodeToPrint) {
                console.log(nodeToPrint.value);
                let left = nodeToPrint.left;
                let right = nodeToPrint.right;
                if(left) printNode(left);
                if(right) printNode(right);
            }
        }
    }
}

let b = new BinarySearchTree();
b.insert(3);
b.insert(8);
b.insert(32);
b.insert(7);
b.insert(1); 
console.log(`Find 3: ${b.find(3).value}`);
console.log(`Find 22: ${b.find(22)}`);
debugger;
let bfsResults = b.breadthFirstSearach();
console.log(`Breadth first search: ${bfsResults}`);