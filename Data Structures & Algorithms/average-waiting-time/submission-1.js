class Solution {
    /**
     * @param {number[][]} customers
     * @return {number}
     */
    averageWaitingTime(customers) {
        let currentTime = 0;
        let totalWaitingTime = 0;
        for (const [arrival, time] of customers) {
            currentTime = Math.max(currentTime, arrival);
            currentTime += time;
            totalWaitingTime += currentTime - arrival;
        }
        return totalWaitingTime / customers.length;
    }
}