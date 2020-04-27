'use strict';
console.log(productOfArray([3,5,1,7]));
// passed
function productOfArray(a){
    if(a.length === 0){
        return 1;
    }
    debugger
    return a[0]*productOfArray(a.slice(1));
}