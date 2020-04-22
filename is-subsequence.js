console.log(isSubsequence("dog","dorghouse"));
// note this solution fails because the first string's characters do not have to be contiguous according to the instructinos- i couldn't see the use case for this so I left it alone
function isSubsequence(s1,s2){
    // handle trivial cases
    if(s1==="" || s2===""){
        return false;
    }
    if(s2.length<s1.length){
        return false;
    }
    
    let p1 = 0;
    let p2 = 0;

    while(p2<s2.length){
        if(s1.charAt(p1)===s2.charAt(p2+p1)){
            p1++;
        }else{
            p1 = 0; // rest p1
            p2++; // look for next candidate
        }
        if(p1===s1.length){
            return true;
        }
        // rule out case where not enough letters left after first char match
        if(p2>s2.length-s1.length){
            return false;
        }
    }

    // test remaining characters
    while(p1<s1.length){
        if(s1.charAt(p1)!==s2.charAt(p2)){

        }
    }
}