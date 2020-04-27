'use strict';
console.log(power(2,5));
// passed
function power(base,exponent){
    if(exponent === 0){
        return 1;
    } 
    return base*power(base,exponent-1);
}