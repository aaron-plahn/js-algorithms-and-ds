console.log(areThereDuplicates(1,2,3,'b',8,4,'b'));
function areThereDuplicates(...theArgs){
    // handle trivially false (no argumets)
    if(theArgs.length === 0){
        return false;
    }
    // get frequency counts for all elements
    let fc = getFrequenciesForArray(theArgs);
    // check if any key has a frequency >1
    return frequencyCountHasDuplicates(fc);
}

function getFrequenciesForArray(a){
    let frequencyCounter = {};
    for(let e of a){
        frequencyCounter[e] = (frequencyCounter[e] || 0) + 1;
    }
    return frequencyCounter;
 }

 function frequencyCountHasDuplicates(f){
     for(let key in f){
         if(f[key]!==1){
             return true;
         }
     }
     return false;
 }