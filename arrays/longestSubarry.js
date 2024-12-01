//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(arr) { console.log(arr.join(' ')); }

function main() {
    let t = parseInt(readLine(), 10);
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let k = parseInt(readLine(), 10);
        let obj = new Solution();
        let res = obj.lenOfLongestSubarr(arr, k);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
class Solution {
    lenOfLongestSubarr(arr, k) {
        
        let maxLen = 0
        let prefixMap = new Map()
        let prefixSum = 0
        
        for(let i =0;i<arr.length;i++){
            
            prefixSum+=arr[i]
            
            if(prefixSum === k){
                
                maxLen = i+1
            }
            
            if(prefixMap.has(prefixSum-k)){
                
                maxLen = Math.max(maxLen,i-prefixMap.get(prefixSum-k))
            }
            
            if(!prefixMap.has(prefixSum)){
                
                prefixMap.set(prefixSum,i)
            }
        }
        return maxLen
        
        
        
        // let maxLen = 0
        // for(let i = 0 ;i<arr.length;i++){
        //     let sum =0
            
            
        //     for(let j=i;j<arr.length;j++){
                
        //       sum+=arr[j]
        //       if(sum === k){
                   
        //           maxLen=Math.max(maxLen,j-i+1)
        //       }
        //     }
        // }
        //return maxLen
        // code here
    }
}
