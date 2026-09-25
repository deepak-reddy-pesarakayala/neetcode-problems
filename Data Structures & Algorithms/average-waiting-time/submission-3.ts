class Solution {
    averageWaitingTime(customers: number[][]): number {
        let currentTime = 0;
        let totalWaiting = 0;
        for (const [arrival, time] of customers) {
            currentTime = Math.max(currentTime, arrival) + time;
            totalWaiting += currentTime - arrival;
        }
        return totalWaiting / customers.length;
    }
}