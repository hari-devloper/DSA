/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let st = s.split(' ')
    if(pattern.length !== st.length ) return false
    let pm = new Map()
    let sm = new Map
    for(let  i = 0 ;i<pattern.length;i++){
       let charP = pattern[i]
       let charS = st[i]
       if(pm.has(charP) || sm.has(charS)){
   
           if(pm.get(charP)!==charS || sm.get(charS)!==charP) return false 
   
       }
       else{
           pm.set(charP,charS)
           sm.set(charS,charP)
       }
   
    }
   
    return true
       
   };