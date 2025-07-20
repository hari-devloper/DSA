/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {

    let jumps = 0
    let cjump = 0
    let fjump = 0

    for(let i=0;i<nums.length-1;i++){
    
     fjump = Math.max(fjump,i+nums[i])

     if(i === cjump){
        jumps++
        cjump =fjump
     }
 

    }
  return jumps  
};