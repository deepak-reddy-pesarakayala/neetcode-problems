class Solution {
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1;
        let right = Math.max(...piles);
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            let hours = 0;
            for (const pile of piles) {
                hours += Math.ceil(pile / mid);
                if (hours > h) break;
            }
            if (hours <= h) right = mid - 1;
            else left = mid + 1;
        }
        return left;
    }
}