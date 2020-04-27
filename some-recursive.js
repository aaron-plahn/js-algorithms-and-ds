'use strict';
console.log(someRecursive([1,3,5,6],isThree));
// passed
function someRecursive(a,someFunction){
    if(a.length === 0){
        return false;
    }
    debugger;
    return (someFunction(a[0]) || someRecursive(a.slice(1),someFunction));
}

function isThree(n){
    return n === 3;
}