console.log(maxSubarraySum([1,4,5,6,7],2));
// passed
function maxSubarraySum(array,n){
    // handle degenerate case
    if(n>array.length){
        return null;
    }

    let tempSum = 0;
    for(let i=0; i<n;i++){
        let currentEl = array[i];
        tempSum+= array[i]; // set initial maxSum as sum of first n elements
    }
    let maxSum = tempSum;
    for(let i = n; i<array.length;i++){
        tempSum = tempSum - array[i-n] + array[i];
        maxSum = Math.max(tempSum,maxSum);
    }
    return maxSum;
}