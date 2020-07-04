'use strict';
function stringifyNumbers(o){
    let result = Object.assign({},o); // shallow clone o to result
    debugger;
    stringifyHelper(o,result);
    return result;
    function stringifyHelper(so,soResult){
        if(typeof so !== 'object' || so === null) return;
        let keys = Object.keys(so);
        keys.forEach((key,index)=>{
            soResult[key] = Object.assign(soResult[key],so[key]) // {...so[key]};
            isNumber(so[key]) ? soResult[key] = soResult[key].toString(): stringifyHelper(so[key],soResult[key]); 
        }); 
    }
}

function isNumber(value) {
   return typeof value === 'number' && isFinite(value);
}