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
console.log(`collectStrings(o) = ${collectStrings(o)}`);
console.log(collectStrings(o));
function collectStrings(o){
    let result = [];
    for(let key in o){
        if(isObject(o[key])){
            result = result.concat(collectStrings(o[key]));
        } else if(typeof o[key] === 'string'){
            result.push(o[key]);
        } // ignore non-string, non-objects
    }
    return result;
}

function isObject(o){
    return typeof o === 'object' && o !== null;
}
console.log(`Collect strings: ${collectStrings({
    a: "hi",
    b: {
        c: "what's",
        d: 2,
        e: "up",
        f: {
            g: 1,
            h: 5,
            i: "?"
        }
    }
})}`);