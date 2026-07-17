class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let left = Math.max(...weights);
        let right = weights.reduce((sum, weight) => sum + weight, 0);
        while (left < right) {
            const capacity = Math.floor((left + right) / 2);

            if (this.canShip(weights, days, capacity)) {
                right = capacity;
            } else {
                left = capacity + 1;
            }
        }
        return left;
    }
    canShip(weights, days, capacity) {
        let requiredDays = 1;
        let currentWeight = 0;
        for (const weight of weights) {
            if (currentWeight + weight > capacity) {
                requiredDays++;
                currentWeight = 0;
            }
            currentWeight += weight;
        }
        return requiredDays <= days;
    }
}