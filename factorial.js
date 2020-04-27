'use strict';
console.log(factorial(7));
// passed
function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n*factorial(n-1);
}