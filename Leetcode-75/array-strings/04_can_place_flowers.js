/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}  
 */

var canPlaceFlowers = function(flowerbed, n) {

    // Iterate through the entire flowerbed array
      for (let i = 0; i < flowerbed.length; i++) {
        //check if the current plot is empty
        if(flowerbed[i] === 0) {
            // check left and right neighbors (treat out-of-bounds as empty)
            const leftEmpty = (i === 0) || (flowerbed[i - 1] === 0);
            const rightEmpty = (i === flowerbed.length - 1) || (flowerbed[i + 1] === 0);

            // If current and both neighbors are empty, plant a flower 
            if (leftEmpty && rightEmpty) {
                flowerbed[i] = 1; // place a flower
                n--; // one flower planted 
                if (n === 0) return true; // stop early if done
            }
        }
      }

      // return true if all flowers were planted successfully 
      return n <= 0;
}

/* --- LOGIC ---
  -- Initialize the problem
   - start with an input array 'flowerbed' which contains 0s and 1s,
   - representing empty and plantd spots respectively, and an integer n which is the number of new flowers you need to plant without violating the no-adjacent-flowers rule.
  
  -- Iterate over each plot in the flowerbed
   - use a loop from the first plot to the last to consider every position where you might plant a flower.

  -- Check if the current plot is empty
   - at position i, if the value is 0, this spot is a candidate for planting a new flower.
  
  -- Check the left neighbor plot 
   - Determine if the plot to the left (index i-1) is empty or if it does not exist(edge of the flowerbed):
     - the condition (i === 0) means if i is 0, then there is no left neighbor, so consider left as "empty" for this purpose.
     - or (flowerbed[i - 1] === 0) means the left neighbor plot is empty.

  -- Check the right neighbor plot 
   - Determine similarly if the plot to the right (index i+1) is empty or out of bounds:
     - (i === flowerbed.length - 1) means if i is the last plot, then there is no right neighbor, so consider right as "empty".
     - or (flowerbed[i + 1] === 0) means the right neighbor plot is empty.

  -- Stop early if all flowers have been planted.

  -- Return the final result after full iteration
*/

var canPlaceFlowers = function(flowerbed, n) {
    for(let i = 0; i < flowerbed.length; i++) {
        if(flowerbed[i] === 0) {
            const leftEmpty = (i === 0) || (flowerbed[i-1] === 0);
            const rightEmpty = (i === flowerbed.length -1 ) || (flowerbed[i+1] === 0);
            if (leftEmpty && rightEmpty) {
                flowerbed[i] =1; 
                n--;
                if (n === 0) return true;
            }
        }
    }
    return n <= 0;
}


var canPlaceFlowers = function(flowerbed, n) {
    for (let i =0; i < flowerbed.length; i++) {
        if(flowerbed[i] === 0) {
            const leftEmpty = (i === 0) || (flowerbed[i-1] === 0);
            const rightEmpty = (i === flowerbed.length-1) || (flowerbed[i+1] == 0);
            if(leftEmpty && rightEmpty) {
                flowerbed[i] = 1;
                n--;
                if (n === 0) return true;
            }
        }
    }
    return n <= 0;
}

var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if(flowerbed[i] === 0) {
            const leftEmpty = (i === 0) || (flowerbed[i - 1] === 0);
            const rightEmpty = (i === flowerbed.length -1) || (flowerbed[i+1] === 0);
            if(leftEmpty && rightEmpty) {
                flowerbed[i] = 1;
                n--;
                if(n===0) return true;
            }
        }
    }
    return n <= 0;
}

var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            const leftEmpty = (i === 0) || (flowerbed[i -1] === 0);
            const rightEmpty = (i === flowerbed.length - 1) || (flowerbed[i + 1] === 0);
            if(leftEmpty && rightEmpty) {
                flowerbed[i] = 1;
                n--;
                if(n===0) return true;
            }
        }
    }
    return n <= 0;
}