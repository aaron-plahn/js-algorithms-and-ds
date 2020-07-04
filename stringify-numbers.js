'use strict';
let o = {
    x: 2,
    dogs: {
        y: 2,
        z: 5,
        k: 16,
        l: {
            a: 3,
            b:4
        }
    },
    total: {
        chaos: {
            t: 2,
            j: 8,
            d: 87
        }
    },
    horses: [1,2,7,8]
}
console.log(`stringifyNumbers(o) = ${stringifyNumbers(o)}`);
console.log(stringifyNumbers(o));
// note stringifyNumbers is not supposed to modify existing objects
function stringifyNumbers(o){
    let result = {};
    for(let key in o){
        if(typeof o[key] === 'object' && !Array.isArray(o[key])){
            result[key] = stringifyNumbers(o[key]);
        } else if(isFiniteNumber(o[key])){
            result[key] = o[key].toString();
        } else{
            result[key] = o[key];
        }
    }
    return result;
}

function isFiniteNumber(n){
    return ((typeof n === 'number') && (n!== Infinity));
}