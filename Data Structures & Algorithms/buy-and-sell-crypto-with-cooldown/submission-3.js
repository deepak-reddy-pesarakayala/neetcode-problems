class Solution {
    maxProfit(prices) {
        let hold = -prices[0];
        let sold = 0;
        let rest = 0;
        for (let i = 1; i < prices.length; i++) {
            let prevSold = sold;
            let prevHold = hold;
            let prevRest = rest;
            sold = prevHold + prices[i];
            hold = Math.max(prevHold, prevRest - prices[i]);
            rest = Math.max(prevRest, prevSold);
        }
        return Math.max(sold, rest);
    }
}