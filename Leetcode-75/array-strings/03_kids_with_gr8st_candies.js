// define a function named 'kidsWithCandies' that takes an array 'candies' and an integer 'extraCandies' as an input
var kidsWithCandies = function(candies, extraCandies) {

    // find the maximum number of candies any kid currently has in the 'candies' array
    const maxCandies = Math.max(...candies);

    // create an empty array 'result' which will store boolean values for each kid 
    const result = [];

    // iterate or loop through each kid indexed by 'i' from 0 to the length of the candies array -1  
    for (let i = 0; i < candies.length; i++)
        {
            //calculate if the current kid's candies plus all extraCandies is
            // greater than or equal to the max number of candies anyone already has
            if (candies[i] + extraCandies >= maxCandies) {

                // if yes, add 'true' to the result array for this kid
                result.push(true);
            }
            else {

                // else, add 'false' to the result array for this kid 
                result.push(false);
            }

    }
    return result;
};

/*  ---LOGIC----
  - use a method like Math.max(...candies)  to find the maximum value in the candies array.
  - this maximum value represents the current highest candy count any kid has.
  - create an empty array to store the results in boolean value for each kids.
  - iterate through each kid's candy count using a for loop.
  - for each kid, calculate if their current candy count plus the extraCandies is greater than or equal to the maximum candy count.
  - if it is, append true to the result array, otherwise append false 
  - finally return the result array containing boolean values for each kid.
*/

var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = Math.max(...candies);
    const result = [];

    for(let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxCandies) {
            result.push(true);
        }
        else {
            result.push(false);
        }
    }
    return result;
};

var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = Math.max(...candies);
    const result = [];

    for(let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= maxCandies) {
            result.push(true);
        }
        else {
            result.push(false);
        }
    }
    return result;
};