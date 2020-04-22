console.log(averagePair([1,3,3,5,6,7,10,12,19],9));
// passed
function averagePair(integerArray,target){
    let average = integerArray[1]; // smallest element in sorted array
    let left = 0;
    let right = integerArray.length-1;
    while(left<right){
        average = (integerArray[left]+integerArray[right])/2;
        if(average===target){
           return true;
        }
        if(average<target){
            left++;
        }
        if(average>target){
            right--;
        }
    }
    return false;
}