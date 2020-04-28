'use strict';
console.log(linearSearch([1,4,3,0,81,9],8));
// passed
function linearSearch(a,target){
    for(let i = 0; i < a.length; i++){
        if(a[i] === target){
            return i; 
        }
    }
    return -1;
}