class Solution {
    carPooling(trips, capacity) {
        const diff = new Array(1001).fill(0);
        for (const [passengers, from, to] of trips) {
            diff[from] += passengers;
            diff[to] -= passengers;
        }
        let currentPassengers = 0;
        for (let i = 0; i <= 1000; i++) {
            currentPassengers += diff[i];
            if (currentPassengers > capacity) {
                return false;
            }
        }
        return true;
    }
}