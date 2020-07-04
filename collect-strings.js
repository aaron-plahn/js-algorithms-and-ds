'use strict';
function collectStrings(o){
    let results = [];
    collectStringsHelper(o);
    return results;
    function collectStringsHelper(so){
        let keys = Object.keys(so);
        keys.forEach((key,index)=>{
            let value = so[key];
            if(isObject(value)) collectStringsHelper(value);
            debugger;
            if (typeof value === 'string' || value instanceof String) results.push(value);
        })
    }
}

function isObject(o){
    return typeof yourVariable === 'object' && yourVariable !== null;
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