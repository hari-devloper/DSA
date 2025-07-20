/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const numMap = new Map(); // Stores {number: index}
   const results = [];

   for (let i = 0; i < nums.length; i++) {
       const complement = target - nums[i];

       // Check if complement is already in the map
       if (numMap.has(complement)) {
           results.push([numMap.get(complement), i]); // Add pair of indices
       }

       // Store the current number and its index
       numMap.set(nums[i], i);
   }

   return results.flat();
   
};