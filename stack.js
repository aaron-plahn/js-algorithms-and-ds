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

