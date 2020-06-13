'use strict';
function countZeroes(a){
    if(a[0]===0) return a.length;
  for(let i = 0; i<a.length-1; i++){
      if(a[i]===1&&a[i+1]===0) return a.length - (i + 1);
  }
  return (a[a.length-1] === 0) ? 1 : 0;
}
console.log(countZeroes([1,1,1,1,1,1,,0,0,0]));