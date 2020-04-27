'use strict';
// passed
console.log(reverseString("Doggy"));
function reverseString(s){
    if(s.length === 0){
        return "";
    }
    return s.charAt(s.length-1).concat(reverseString(s.substring(0, s.length - 1)));
}