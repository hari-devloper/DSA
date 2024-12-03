/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    

    let pos = 0
    let neg = 1
    let out = []
    for(let i=0;i<nums.length;i++){
   
       if(nums[i]<0){
           out[neg]=nums[i]
           neg = neg+2
       }
       else{
           out[pos] = nums[i]
           pos = pos+2
       }
    }
   
    return out
   };