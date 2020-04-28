'use strict';
console.log(capitalizeWords(['hi','my','name','is']));
// passed
function capitalizeWords(a){
    let outputArray = [];
    function capitalizeRecursive(a){
        if(a.length === 0 ){
            return outputArray;
        }
        outputArray.push(a[0].toUpperCase());
        return capitalizeRecursive(a.slice(1));
    }
    let output = capitalizeRecursive(a);
    return output;
}