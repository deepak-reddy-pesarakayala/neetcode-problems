class Solution {
    maxProfit(prices) {
        let hold = -prices[0];
        let sold = 0;
        let rest = 0;
        for (let i = 1; i < prices.length; i++) {
            let prevSold = sold;
            sold = hold + prices[i];
            hold = Math.max(hold, rest - prices[i]);
            rest = Math.max(rest, prevSold);
        }
        return Math.max(sold, rest);
    }
}