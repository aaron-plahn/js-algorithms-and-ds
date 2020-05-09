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