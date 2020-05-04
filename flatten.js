'use strict';
console.log(flatten([1,2,[3,[4,5],[6,7,8],9],[10,11,12]]));
// passed
function flatten(a){
    // expects a to be an array of arrays to flatten
    let aFlat = [];
    function flatHelper(a){
        for(let i=0; i<a.length; i++){
            if(Array.isArray(a[i])){
                flatHelper(a[i]);
            }else{
                aFlat.push(a[i]);
            }
        }
    }
    flatHelper(a);
    return aFlat;
}