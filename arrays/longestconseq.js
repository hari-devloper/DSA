/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    let longest  = 0
    let newSet = new Set(nums)
    for(let num of nums){

      if(!newSet.has(num-1)){
             let count = 1
      let currentNum = num
       while(newSet.has(currentNum+1)){
        count++
        currentNum++
       }

       longest = Math.max(longest,count)

      }
      

    }


    return longest
    
};