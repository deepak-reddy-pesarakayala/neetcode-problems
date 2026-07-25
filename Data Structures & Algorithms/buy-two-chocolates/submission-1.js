class Solution {
    /**
     * @param {number[]} prices
     * @param {number} money
     * @return {number}
     */
    buyChoco(prices, money) {
        let min1 = Infinity;
        let min2 = Infinity;
        for (const price of prices) {
            if (price < min1) {
                min2 = min1;
                min1 = price;
            } else if (price < min2) {
                min2 = price;
            }
        }
        const minCost = min1 + min2;
        return money >= minCost ? money - minCost : money;
    }
}