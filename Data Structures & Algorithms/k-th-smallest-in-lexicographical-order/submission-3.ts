class Solution {
    findKthNumber(n: number, k: number): number {
        let current = 1;
        k--;
        while (k > 0) {
            const steps = this.countSteps(n, current, current + 1);
            if (steps <= k) {
                current++;
                k -= steps;
            } else {
                current *= 10;
                k--;
            }
        }
        return current;
    }
    countSteps(n: number, first: number, next: number): number {
        let steps = 0;
        while (first <= n) {
            steps += Math.min(n + 1, next) - first;
            first *= 10;
            next *= 10;
        }
        return steps;
    }
}