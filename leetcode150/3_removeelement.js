/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let slow = 1; // points to where the next unique element should go

    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow - 1]) {
            nums[slow] = nums[fast];
            slow++;
        }
    }

    return slow;
};
