'use strict';
class Node{
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
        let newNode = new Node(value);
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

let q = new Queue();
q.enqueue(5);
q.enqueue(19);
console.log(`Dequeing: ${q.dequeue().value}`);
console.log(`New length: ${q.size}`);
console.log(`Dequeing once more: ${q.dequeue().value}`);
console.log(`New length: ${q.size}`);
q.enqueue(20);
console.log(`Length after enqueueing: ${q.size}`);