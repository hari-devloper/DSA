/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let profit = 0
    let min = prices[0]
    for(let  i = 0 ; i<prices.length;i++){
       diff = prices[i] - min
       profit = Math.max(profit,diff)
       min = Math.min(min,prices[i])

    }
    
    return profit
};