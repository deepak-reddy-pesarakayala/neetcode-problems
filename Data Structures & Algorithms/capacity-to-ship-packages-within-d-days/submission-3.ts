class Solution {
    shipWithinDays(weights: number[], days: number): number {
        let left = Math.max(...weights);
        let right = weights.reduce((sum, weight) => sum + weight, 0);
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            let requiredDays = 1;
            let currentWeight = 0;
            for (const weight of weights) {
                if (currentWeight + weight > mid) {
                    requiredDays++;
                    currentWeight = 0;
                }
                currentWeight += weight;
            }
            if (requiredDays <= days) right = mid - 1;
            else left = mid + 1;
        }
        return left;
    }
}