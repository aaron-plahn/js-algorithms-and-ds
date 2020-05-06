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
        /*
        if(this.length === 1){
            let temp = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return temp;
        } */
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
        return current;
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
l.printList();
console.log("Sorry, you've been popped, my friend.");
console.log(`Pop goes the ${l.pop().val}`);
l.printList();
l.push(" buddy!");
l.push(" hey!");
console.log("I've got a new friend.");
l.printList();