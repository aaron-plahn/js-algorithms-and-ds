'use strict';
// passed
console.log(findLongestSubstring(""));
function findLongestSubstring(s){
    let leftWindow = 0;
    let longest = 0;
    let frequency = {};
    
    for (let rightWindow = 0; rightWindow < s.length; rightWindow++) {
      frequency[s[rightWindow]] = (frequency[s[rightWindow]] || 0) + 1;
  
      if (Object.values(frequency).some((element) => element > 1)) {
        frequency[s[leftWindow]] -= 1;
        leftWindow += 1;
      }
      
      longest = Math.max(longest, rightWindow - leftWindow + 1);
    }
  
    return longest;
}

function containsDuplicate(f){
    for(let key in f){
        if(f[key]>1){
            return true;
        }
        return false;
    }
}