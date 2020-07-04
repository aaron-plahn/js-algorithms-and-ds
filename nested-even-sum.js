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
    }
}
console.log(`nestedEventSum(o) = ${nestedEvenSum(o)}`);
// this one was tricky, so I studied and reproduced the instructor's solution
function nestedEvenSum(o, result = 0){
    for(let key in o){
        if(typeof o[key] === 'object'){
            result += nestedEvenSum(o[key]);
        } else if(typeof o[key] === 'number' && o[key] % 2 === 0){
            result += o[key]; 
        }
    }
    return result;
}