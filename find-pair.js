'use strict';
function findPair(a,target){
    let aFC = getFrequenciesForArray(a);
    for(let key in aFC){
        if(aFC.hasOwnProperty(Number(key)+target)) return true;
    }
    return false;
}
console.log(`Find pair: ${findPair([1,1,8,22,4,7],5)}`);

function getFrequenciesForArray(a){
    let frequencyCounter = {};
    for(let e of a){
        frequencyCounter[e] = (frequencyCounter[e] || 0) + 1;
    }
    return frequencyCounter;
 }