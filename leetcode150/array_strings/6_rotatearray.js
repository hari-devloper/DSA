/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    function reverse(start,end){
     while(start<end){
    [nums[start],nums[end]] = [nums[end],nums[start]]
    start++
    end--

     }
    }

    let  d = k%(nums.length)

    reverse(0,nums.length-1)
    reverse(0,d-1)
    reverse(d,nums.length-1)

//left rotate
//  reverse(0,d-1)
// reverse(d,nums.length-1)
//  reverse(0,nums.length-1)

    return nums


    
};