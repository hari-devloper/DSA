/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    // let uc = 0;

    // for(let i =0 ;i<nums.length;i++){
    //    let isDuplicate = false

    //    for(let j= 0;j<i;j++){

    //     if(nums[i] == nums[j]){

    //         isDuplicate = true
    //         break;
    //     }
    //    }

    //    if(!isDuplicate){

    //     nums[uc] = nums[i]
    //     uc++
    //    }




    // }
    

    // return uc

    let i = 0

    for(let j=1;j<nums.length;j++){

       if(nums[i]!==nums[j]){
        nums[i+1] = nums[j]
        i++
       }


    }

    return i+1
};

console.log(removeDuplicates([1,2,3,3,4,66,6,6]))