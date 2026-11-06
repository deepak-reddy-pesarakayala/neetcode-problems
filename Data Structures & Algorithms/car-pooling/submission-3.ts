class Solution {
    carPooling(trips: number[][], capacity: number): boolean {
        const passengers = new Array(1001).fill(0);

        for (const [num, from, to] of trips) {
            passengers[from] += num;
            passengers[to] -= num;
        }

        let currentPassengers = 0;

        for (let i = 0; i <= 1000; i++) {
            currentPassengers += passengers[i];

            if (currentPassengers > capacity) {
                return false;
            }
        }

        return true;
    }
}