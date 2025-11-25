// 1. do the product of all the nums
// 2. iterate of over the array pick ith element divide by productOfArray.

// let prod = 1;
// for( let i of nums){
//   prod  = prod * i;
// }
//  let ans = [];
// for( let i; nums.length;i++){
//   ans[i] = prod/i;
// }

//Intution -> For every ith element we can get the prefix product and suffix product and multiply them then will have our answer,
// 1. Get the lenght of the array. 
// 2. Declare the answer array.
// 3. We need to get the prefix product. For loop from 0 to n (length of the array).
//4. We need to get the suffix product. for loop n-1 to 0.
// 5. Now multiply suffix and prefix.
// 6. return the answer.
// Time complexity -> 2 O(n) -> O(n).


var productExceptSelf = function(nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  // Step 1: Prefix product
  let prefix = 1;
  for (let i = 0; i < n; i++) { // O(n)
    answer[i] = prefix;     // store prefix product up to (i-1)
    prefix *= nums[i];      // update prefix for next index
  }

  // Step 2: Suffix product and combine
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) { // o(n)
    answer[i] *= suffix;    // multiply with suffix product after (i)
    suffix *= nums[i];      // update suffix for next index
  }

  return answer;
};

