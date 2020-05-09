'use strict';
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        // create empty list
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(v){
        let newNode = new Node(v);
        if(this.head){
            this.tail.next = newNode; // set next on former tail
        } else{
            this.head = newNode;
        }
        this.tail = newNode; // update tail either way
        this.length++;
        return this; // return list
    }

    pop(){
        if(!this.head) return undefined;
        let previous;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            // reset
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0) this.tail = null;
        return temp;
    }

    unshift(v){
        let newNode = new Node(v);
        console.log(`newNode: ${newNode.val}`);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            console.log(`New head value: ${this.head.val}`);
        }else{
            console.log(`The newNode: ${newNode}`);
            newNode.next = this.head; // Point new node's next to old head
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    getNode(index){
        if(index < 0 || index >= this.length){
            console.log(`Index out of bounds.`);
            return null;
        }
        let current = this.head;
        for(let i=0; i<index; i++){
            current = current.next;
        }
        return current;
    }

    setNode(index,newValue){
        let node = this.getNode(index);
        if(node){
            node.val = newValue;
            return true;
        } 
        return false;
    }

    insert(index,value){
        // edge cases
        if( index<0 || index>this.length) return false;
        if( index===0 ) return !!this.unshift(value);
        if( index===this.length ) return !!this.push(value); // insert to end = push

        // standard case
        let prev = this.getNode(index-1); // will insert after prev
        let newNode = new Node(value);
        newNode.next = prev.next; // poit new node's next to the element originally at index
        prev.next = newNode; // change previous node's next to new node
        this.length++;
        return true;
    }

    remove(index){
        // edge cases
        if(index<0 || index>=this.length) return undefined;
        if(index===0) return this.shift();
        if(index===this.length-1) return this.pop();
        // standard case
        let prev = this.getNode(index-1); // get reference to node before the one to remove
        let nodeToRemove = prev.next;
        prev.next = nodeToRemove.next; // bypass node to remove in list
        this.length--;
        return nodeToRemove;
    }

    reverse(){
        if(this.length===0 || this.length===1) return this;
        let prev = this.head;
        let current = prev.next;
        prev.next = null; // set next for 0 (new tail)
        // swap head and tail
        let oldTail = this.tail;
        this.tail = this.head;
        this.head = oldTail;
        // reverse inner nodes in place
        while(current){
            let next = current.next; // get reference to next before breaking link
            current.next = prev; // now reverse current node to point to previous node
            prev = current; // keep reference to this node for the next go round
            current = next; // process the next node in the next iteration
        }
        return this;
    }

    printList(){
        let current = this.head;
        for(let i=0; i<this.length; i++){
            console.log(current.val);
            current = current.next;
        }
    }
}

let l = new SinglyLinkedList();
l.push("Hi");
l.push(" my");
l.push(" friend.");
console.log(`Insert worked: ${l.insert(2,"Hey")}`);
l.printList();
console.log(`Removing node : ${l.remove(2).val}`);
console.log(`List exists: ${!!l}`);
l.printList();
l.reverse();
l.printList();