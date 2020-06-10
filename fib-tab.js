'use strict';
function fib(n){
    if(n===1 || n===2) return 1;
    let fibNum = [0,1,1];
    for(let i = 3; i<=n; i++){
        fibNum[i] = fibNum[i-1] + fibNum[i-2];
    }
    return fibNum[n];
}
console.log(`fib(8): ${fib(8)}`);