'use strict';
class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(value,priority){
        this.values.push({value,priority});
        this.sort();
    }

    dequeue(){
        return this.values.shift();
    }

    sort(){
        this.values.sort((a,b)=>{
           return a.priority - b.priority;
        })
    }
}
let q = new PriorityQueue();
q.enqueue("A",3);
q.enqueue("B",7);
q.enqueue("C",2);
q.enqueue("D",0);
q.enqueue("E",5);
console.log(q.values);