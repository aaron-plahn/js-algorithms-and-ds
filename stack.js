'use strict';
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
// signly-linked-list implementation
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        let newNode = new Node(value);
        if(this.size === 0) this.last = newNode;
        newNode.next = this.first;
        this.first = newNode;
        return ++this.size;
    }

    pop(){
        if(this.size === 0) return null; //edge case
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

    print(){
        let current = this.first;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
}
let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.print();
console.log(`Push 4: ${s.push(4)}`);
console.log(`Popping: ${s.pop().value}`);
console.log(`Popping: ${s.pop().value}`);
console.log(`Popping: ${s.pop().value}`);
console.log(`Popping: ${s.pop().value}`);
