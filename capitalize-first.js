'use strict';
console.log(capitalizeFirst(['hi','my','name','is']));
// passed
function capitalizeFirst(a){
    let outputArray = [];
    function capitalizeRecursive(a){
        if(a.length === 0 ){
            return outputArray;
        }
        outputArray.push(capitalizeFirstLetterOfString(a[0]));
        return capitalizeRecursive(a.slice(1));
    }
    let output = capitalizeRecursive(a);
    return output;
}

function capitalizeFirstLetterOfString(s){
    return s.charAt(0).toUpperCase() + s.slice(1);
}