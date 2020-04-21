"use strict";
console.log(sameFrequency(341,134));
function sameFrequency(n1,n2){
    let string1 = n1.toString();
    let string2 = n2.toString();
    // Handle trivially false
    if(string1.length !== string2.length){
        return false;
    }
    // Get frequencies for n1's digits
    let f1 = getDigitFrequenciesForString(string1);
    // Get frequencies for n2's digits
    let f2 = getDigitFrequenciesForString(string2);
    // Compare frequencies
    return compareFrequencyCounts(f1,f2);
}

function getDigitFrequenciesForString(s){
   let frequencyCounter = {};
   for(let char of s){
       frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
   }
   return frequencyCounter;
}

function compareFrequencyCounts(c1,c2){
    for(let key in c1){
        if(!(key in c2)){
            return false;
        }
        if(c1[key]!==c2[key]){
            return false;
        }
    }
    return true;
}
