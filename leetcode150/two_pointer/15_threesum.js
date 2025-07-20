/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    let result  = []
    nums.sort((a,b)=>a-b)
    for(let  i = 0 ; i<nums.length;i++){
        if(nums[i]===nums[i-1]){
            continue
        }
        let l = i+1
        let r = nums.length-1
        

        while(l<r){
         
         let sum = nums[i]+nums[l]+nums[r]

         if(sum<0)
         {
          l++
         }
         else if(sum > 0){
         
         r--
         }

         else{
         result.push([nums[i],nums[l],nums[r]])
           while(l<r && nums[l]===nums[l+1]){l++}
           while(l<r && nums[r]===nums[r-1]){r--}
            l++
            r--
            
         }


        }
    }

  return result  
};