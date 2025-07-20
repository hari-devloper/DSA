/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    if(s.length !== t.length) return false

    let mst = {}
    let mts = {}

    for(let  i = 0;i<s.length;i++) {
       let charS = s[i]
       let charT = t[i]
       if(mst[charS]!==undefined || mts[charT]!==undefined)
       {
         if(mst[charS]!==charT || mts[charT]!==charS){
            return false
         }
       }
       else
       {
        mst[charS]=charT
        mts[charT]=charS
       }

    } 

    return true
};