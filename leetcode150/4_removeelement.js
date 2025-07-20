var removeDuplicates = function(nums) {
    const n = nums.length;
    if (n <= 2) return n;

    let slow = 2;

    for (let fast = 2; fast < n; fast++) {
        if (nums[fast] !== nums[slow - 2]) {
            nums[slow] = nums[fast];
            slow++;
        }
    }

    return slow;
};
