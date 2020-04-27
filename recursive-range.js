'use strict';
console.log(recursiveRange(100));
// passed
function recursiveRange(n){
    if(n === 0){
        return 0;
    }
    return n + recursiveRange(n-1);
}