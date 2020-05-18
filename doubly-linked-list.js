'use strict';
class Node{
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined; // empty list
        let popped = this.tail;
        if(this.length===1) this.head = null; // pop lone element
        this.tail = popped.prev;
        this.tail.next = null;
        this.length--;
        return popped;
    }

    shift(){
        if(!this.head) return undefined; // nothing to shift
        let oldHead = this.head;
        if(this.length===1) this.tail = null;
        this.head = oldHead.next;
        this.head.prev = null;
        this.length--;
        oldHead.next = null;
        return oldHead;
    }

    unshift(val){
        let newNode = new Node(val);
        let oldHead = this.head; // possibly null
        if(!this.head){
            this.tail = newNode;
        } else{
            newNode.next = oldHead;
            oldHead.prev = newNode;
        }
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index){
        if(!this.validIndexForArrayOfSize(this.length,index)) return null;
        // index near beginning
        if(index<this.length/2){
            let current = this.head;
            for(let i=0; i<index; i++){
                current = current.next;
            }
            return(current);
        }
        // index greater than middle index
        let numberOfStepsBackwards = this.length - 1 - index; 
        let current = this.tail;
        for(let i=numberOfStepsBackwards; i>0; i--){
            debugger;
            current = current.prev;
        }
        return(current);
    }

    set(index,val){
        let nodeToSet = this.get(index); // get already does bounds checking
        if(nodeToSet === null) return false;
        nodeToSet.val = val;
        return true;
    }

    insert(index,val){
        // edge cases
        if(!this.validIndexForArrayOfSize(this.length+1,index)) return false; // note this.length is valid insertion index
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);
        // interior node
        let newNode = new Node(val);
        let prevNode = this.get(index-1);
        let nextNode = prevNode.next;
        prevNode.next = newNode;
        nextNode.prev = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }

    remove(index){
        // edge cases
        if(!this.validIndexForArrayOfSize(this.length,index)) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        // internal node
        let nodeToRemove = this.get(index);
        if(nodeToRemove === null) return undefined;
        let prevNode = nodeToRemove.prev;
        let nextNode = nodeToRemove.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.length--;
        return nodeToRemove;
    }

    reverse(){
        if(this.length === 0) return this; 
        // loop through nodes, reversing all arrows
        let current = this.head;
        while(current){
            let oldPrev = current.prev;
            let oldNext = current.next;
            current.prev = current.next;
            current.next = oldPrev;
            current = oldNext;
        }
        // switch head
        let oldHead = this.head;
        this.head = this.tail;
        // switch tail
        this.tail = oldHead;
        return this;
    }

    print(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }

    validIndexForArrayOfSize(n,index){
        if(index<0 || index>=n){
            return false;
        }
        return true;
    }
}
let l = new DoublyLinkedList();
l.push(1);
l.push(2);
l.push(3);
l.push(4);
l.push(5);
l.push(6);
l.push(7);
l.set(0,101);
l.set(3,104);
l.set(l.length-1,107);
l.print();
console.log(`set index 100 ${l.set(100,450)}`);
console.log(`insert 3.5 at 3: ${l.insert(3,3.5)}`);
l.print();
l.insert(0,50);
l.insert(l.length,6005);
console.log(`after start and end insert`);
l.print();
l.remove(3);
l.remove(0);
l.remove(l.length-1);
console.log(`after removing:`);
l.print();
l.reverse();
console.log(`after reversing:`);
l.print();