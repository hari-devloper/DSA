/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    

    let xor1 = 0
    let xor2 = 0

    let len = nums.length

    for(let i=0 ;i<len+1;i++){

        xor1=xor1^i
    }
    for(let i=0 ;i<len+1;i++){

        xor1=xor1^nums[i]
    }

    return xor1^xor2
};