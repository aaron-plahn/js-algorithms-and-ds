'use strict';
let arrayToTest = [44,-2,65,301,11,52,5,3,1];
console.log(quickSort(arrayToTest,0,arrayToTest.length - 1));
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

function mergeSort(a){
    if(a.length === 0 || a.length === 1) return a;
    let midIndex = Math.floor(a.length/2);
    let left = mergeSort(a.slice(0,midIndex)); // start to midIndex - 1
    let right = mergeSort(a.slice(midIndex)); // midIndex to end
    console.log(`Merging sorted arrays: ${left} and ${right} to get ${mergeSortedArrays(left,right)}`);
    return mergeSortedArrays(left,right);
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
    while(i1 < a1.length || i2 < a2.length){
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
        debugger;
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

function quickSort(a,start,end){
    if(start < end){
        let pivot = partitionArray(a,start,end,selectFirstIndex); // shift pivot for offset
        quickSort(a,start,pivot - 1);
        quickSort(a,pivot+1,end);
    }
    return a;
}

function partitionArray(a,start,end,pivotIndexSelector){
    let pivotIndex = pivotIndexSelector(a,start,end); // pick a partition
    if(pivotIndex != start) swapArrayElementsAtIndices(a,start,pivotIndex); // put pivot in 0th position
    let newPivotIndex = start;
    for(let i = start+1; i<a.length; i++){
        if(a[i]<=a[start]){
            newPivotIndex++;
            swapArrayElementsAtIndices(a,newPivotIndex,i);
        }
    }
    swapArrayElementsAtIndices(a,start,newPivotIndex);
    console.log(`Updated array: ${a}`);
    return newPivotIndex;
}

// This is trivial but leave open possible of more sophisticated approach later
function selectFirstIndex(a,start,end){
    return start;
}