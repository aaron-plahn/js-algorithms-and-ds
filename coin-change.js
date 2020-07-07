'use strict';
const denominations = [1,5,10,25];
let test = coinChange(denominations,15);
console.log(`Testing for 6: ${test}`);
function coinChange(denominations,value){
    denominations.unshift(0);
    let solution = new Array(denominations.length+1);
    for(let i = 0; i<denominations.length; i++){
        solution[i] = new Array(value+1);
        for(let j = 0; j<=value; j++){
            solution[i][j] = 0;
        }
    }

    solution[0][0] = 1;
    // @TODO can we avoid the nested loop?
    for(let i = 0; i<denominations.length; i++){ // loop over denominations (row by row)
        debugger;
        for(let j = 0; j<=value; j++){ // traverse rows (all values from)
            if(i===0 && j===0){
                solution[0][0] = 1;
                continue;
            }
            let balanceWithCoin = j - denominations[i]; // what if the second index is less than 0?
            let waysWithCoin = balanceWithCoin < 0 ? 0 : solution[i][balanceWithCoin]; 
            let waysWithoutCoin = i>0 ? solution[i-1][j] : 0;
            solution[i][j] = i>0 ? waysWithCoin + waysWithoutCoin : 0; // no ways to make change for finite amount with no coins
        }
    }
    return solution[denominations.length-1][value];
}