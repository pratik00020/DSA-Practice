/**
Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.

//1. start a for loop from 0 to n.
// 2. Define first and second to infinity
//3. Start iterating the loop. 
4. for each of element (n) of nums
we check if n <= first if yes -> then updated
else if check if n<= second if yes -> then update it
if both the condition fails that means we have increasing triplet.
it means n  > second > first which is our triplet. 
*/

var increasingTriplet = function(nums) {
  let first = Infinity;  // smallest number so far
  let second = Infinity; // second smallest number after first

  for (let n of nums) {
    if (n <= first) {
      // found new smallest number
      first = n;
    } else if (n <= second) {
      // found number bigger than first, but smaller than second
      second = n;
    } else {
      // found n > second > first
      return true;
    }
  }

  return false; // no triplet found
};


/* 
- Approach:
- to find the increasing tritplet subswequence in the given array.
- define two variables first and second to infinity which will hold the smallest and second smallest number.
- start a for loop from 0th index to n(length of array).
- check if the current number is less than or equal to first, if yes update fisrt to current number.
- else if check if the current number is less than or equal to second, if yes update second to current number.
- if both the condition fail it means we found a number greater than second and first, hence return true.
- if the loop ends and no such triplet found return false.
*/