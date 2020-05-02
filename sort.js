'use strict';
console.log(mergeSortedArrays([1,2,4,7],[1,3,5,9]));
function bubbleSort(a){
    let noSwaps;
    for(let i = a.length; i>0; i--){
        noSwaps = true;
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

function selectionSort(a){
    for(let left = 0; left < a.length - 1; left++){
        let minIndex = left;
        for(let j = left + 1; j < a.length; j++){
            if(a[j] < a[minIndex]){
                minIndex = j;
                console.log(`Minimum Index: ${minIndex} for ${a[minIndex]}`);
            }
        }
        if(minIndex != left) swapArrayElementsAtIndices(a,left,minIndex);
    }
    return a;
}

function insertionSort(a){
    for(let elementToInsertIndex = 1; elementToInsertIndex < a.length; elementToInsertIndex++){
        let j = elementToInsertIndex - 1;
        while(a[j] > a[j+1]){
            swapArrayElementsAtIndices(a,j,j+1);
            j--;
        }
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

function mergeSortedArrays(a1,a2){
    let i1 = 0; // 1st array pointer
    let i2 = 0; //2nd array pointer
    let mergedArray = [];
    while(i1 < a1.length && i2 < a2.length){
        debugger;
        if(i1 === a1.length){
            mergedArray.push(a2[i2]);
            i2++;
            continue;
        }
        if(i2 === a2.length){
            mergedArray.push(a1[i1]);
            i1++;
            continue;
        }
        if(a1[i1] < a2[i2]){
            mergedArray.push(a1[i1]);
            i1++;
        }else{
            mergedArray.push(a2[i2]);
            i2++;
        }
    }
    return mergedArray;
}