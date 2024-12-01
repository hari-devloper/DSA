/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {



    // let j = 0

    // for(let i = 0 ;i<nums.length;i++){

    //     if(nums[i] == 0){

    //         j= i
    //         break;
    //     }
    // }

  let j = 0;  // Pointer to the next position for non-zero elements
    
    // Iterate over the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap only if i and j are different to avoid unnecessary swaps
            if (i !== j) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
            j++;  // Increment the position for the next non-zero element
        }
    }
    
};