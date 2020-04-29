'use strict';
console.log(bubbleSort([4,2,3,6,3,1,9,7]));
function bubbleSort(a){
    let noSwaps = true;
    for(let i = a.length; i>0; i--){
        for(let j=0; j < i; j++){
            if(a[j]>a[j+1]){
                swapArrayElementsAtIndices(a,j,j+1);
                noSwaps = false;
            } 
        }
        if(noSwaps) break;
    }
    return a;
}

function swapArrayElementsAtIndices(a,i,j){
    let length = a.length;
    if(i >= length || i < 0 || j >= length || j < 0 ) throw new Error(`Index out of bounds`);
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}