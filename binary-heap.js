'use strict';
class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    insert(valueToInsert){
        this.values.push(valueToInsert);
        this.bubbleUp();
    }
    // removes root (max) value
    extractMax(){
        this.swapIndicesInArray(this.values,0,this.values.length-1);
        let extractedValue = this.values.pop();
        this.sinkDown();
        return extractedValue;
    }

    bubbleUp(){
        let index = this.values.length - 1;
        let parentIndex = this.calculateParentFromChildIndex(index);
        while(this.values[parentIndex] < this.values[index]){
            this.swapIndicesInArray(this.values,index,parentIndex);
            index = parentIndex;
            parentIndex = this.calculateParentFromChildIndex(index);
        }
    }

    sinkDown(){
        let index = 0;
        let leftChildIndex = this.calculateLeftChildFromParentIndex(index);
        let rightChildIndex = leftChildIndex + 1;
        while(this.values[leftChildIndex] > this.values[index] || this.values[rightChildIndex] > this.values[index]){
            if(this.values[leftChildIndex] < this.values[rightChildIndex]){
                this.swapIndicesInArray(this.values,rightChildIndex,index);
                index = rightChildIndex;
            } else{
                this.swapIndicesInArray(this.values,leftChildIndex,index);
                index = leftChildIndex;
            }
            leftChildIndex = this.calculateLeftChildFromParentIndex(index);
            rightChildIndex = leftChildIndex + 1;
        }
    }

    calculateParentFromChildIndex(ci){
        return Math.floor((ci-1)/2);
    }

    calculateLeftChildFromParentIndex(pi){
        return 2*pi + 1;
    }

    swapIndicesInArray(a,i,j){
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        return true;
    }
}

let b = new MaxBinaryHeap();
b.insert(5);
b.insert(2);
b.insert(10);
b.insert(100);
b.insert(33);
console.log(`b.values = ${b.values}`);
b.insert(47);
b.insert(12);
b.insert(55);
console.log(`b.values = ${b.values}`);
debugger;
while(b.values.length>0){
    console.log(`Extracting: ${b.extractMax()}`);
}
