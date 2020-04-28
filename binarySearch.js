'use strict';
console.log(binarySearch([1,2,3,4,5],5));
// passed
function binarySearch(a,target){
    let leftPointer = 0;
    let rightPointer = a.length-1;
    let middlePointer = calculateMidpoint(leftPointer,rightPointer);
    let targetAtIndex = false;
    while(rightPointer - leftPointer > 1 && !targetAtIndex){
        if(a[middlePointer] === target){
            return middlePointer;
        }
        if(a[middlePointer] < target){
            // shiftRight
            leftPointer = middlePointer;
            middlePointer = calculateMidpoint(leftPointer,rightPointer);
            
        }
        if(a[middlePointer] > target){
            // shiftLeft
            rightPointer = middlePointer;
            middlePointer = calculateMidpoint(leftPointer,rightPointer);
        }
    }
    if(a[leftPointer]===target){
        return leftPointer;
    }
    if(a[rightPointer]===target){
        return rightPointer;
    }
    return -1;
}

function calculateMidpoint(x,y){
    return Math.floor((x+y)/2);
}

