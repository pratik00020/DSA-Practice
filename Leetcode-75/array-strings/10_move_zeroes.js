var moveZeroes = function(nums) {
    let pos = 0; // position to place the next non-zero number

    // 1. Move all non-zeroes to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos] = nums[i];
            pos++;
        }
    }

    // 2. Fill the remaining positions with zeroes
    while (pos < nums.length) {
        nums[pos] = 0;
        pos++;
    }
};

/* 
- we have to move zeroes to the last in the array.
- let pointer (pos) equals to zero which move non-zeroes element to the front.
- run a for loop defining i = 0; i , nums.length; i++
- check condition if ith value is not equals to zero , we move move nums[pos] = nums[i]; increment for next non zero element.

- to fill the remaining spaces with zero, we put a while loop check condition pos < nums.length , put nums[pos] = 0 ; pos++;


*/