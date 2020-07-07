'use strict';

let test = [1,3,5,6,7,9,10,11,12];
let testf = [1,1,1,2,2,2,3,3,3,3,3,4,4,5,6,8,8,8,8];
let target = 8;
console.log(`Binary search for 9: ${binarySearch(test,8)}`);
let howMany = sortedFrequency(testf,target);
console.log(`How many ${target}s in testf?: ${howMany}`);
function sortedFrequency(a,n){
    // returns the frequency of target number n in a sorted array a, -1 if n is not in the array
    let indexInArrayOfInstanceOfTarget = binarySearch(a,n);
    if(indexInArrayOfInstanceOfTarget<0) return -1; // no occurrences of target in array
    let right = indexInArrayOfInstanceOfTarget;
    while(a[right] === n){
        right++;
    } // right will end up 1 beyond last occurrence of target in array

    let left = indexInArrayOfInstanceOfTarget;
    while(a[left] === n){
        left--;
    } // left will end up 1 before first occurrence of target in array
    return right - left - 1; // length of run of target in a
}

function binarySearch(a,n){
    // returns index of n in a, if found, -1 otherwise
    // assumes sorted array
    if(a.length === 0) return -1;
    if(a.length === 1) return (a[0]===n? 0 : -1);
    if(n<a[0] || n>a[a.length-1]) return -1; // n out of range

    // valid window's endpoints
    let wLeft = 0;
    let wRight = a.length - 1;
    let p = midpointIndex(wLeft,wRight);
    while(wLeft < wRight){
        if(a[p] === n) return p; // bingo
        if(a[p]<n) wLeft = p + 1; 
        if(a[p]>n) wRight = p - 1;
        p = midpointIndex(wLeft,wRight);
    }
    return (a[p] === n) ? p : -1;
}

function midpointIndex(x,y){
    return Math.floor((x+y)/2);
}