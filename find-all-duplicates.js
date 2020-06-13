'use strict';
function findAllDuplicates(a){
    if(a.length<2) return 0;
    let frequency = {};
    let result = [];
    for(let i = 0; i<a.length; i++){
        frequency[a[i]] = (frequency[a[i]] || 0) + 1;
        if(frequency[a[i]]===2) result.push(a[i]);
    }
    return result;
}
let aTest = [1,4,3,1,2,5,3,2];
console.log(`Find all duplicates: ${findAllDuplicates(aTest)}`);