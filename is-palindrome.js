'use strict';
console.log(isPalindrome('amanaplanacanalpanama'));
// passed
function isPalindrome(s){
    s = s.toLowerCase();
    if(s.length === 0 || s.length === 1){
        return true;
    }
    debugger;
    return (s.charAt(0) === s.charAt(s.length - 1)) && isPalindrome(s.slice(1,s.length-1));
}