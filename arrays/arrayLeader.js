

// User function Template for javascript

/**
 * @param {number[]} a
 * @returns {number[]}
 */
class Solution {
    // Function to find the leaders in the array.
    leaders(a) {
        // code here
        
        let max =  0
        let res1  = []
        
        for(let i =a.length - 1;i>=0;i--){
            
            if(a[i]>=max){
                
                res1.push(a[i])
                
            }
            max = Math.max(a[i],max)
            
        }
        
        return res1.reverse()
    }
}