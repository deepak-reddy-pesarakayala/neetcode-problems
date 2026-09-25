class Solution {
    timeRequiredToBuy(tickets: number[], k: number): number {
        let time = 0;
        for (let i = 0; i < tickets.length; i++) {
            time += Math.min(tickets[i], tickets[k] - (i > k ? 1 : 0));
        }
        return time;
    }
}