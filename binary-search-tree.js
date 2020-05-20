'use strict';
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null; 
    }

    insert(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode; // edge case
            return this;
        } 
        insertNode(this.root,newNode);
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
        debugger;
        function findValueAtNode(value,node){
            debugger;
            if(value === node.value) return node;
            if(value<node.value && node.left) return findValueAtNode(value,node.left);
            if(value>node.value && node.right) return findValueAtNode(value,node.right);
        }
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
b.insert(5);
b.insert(3);
b.insert(8);
console.log(`Find 3: ${b.find(3).value}`);
console.log(`Find 22: ${b.find(22)}`);