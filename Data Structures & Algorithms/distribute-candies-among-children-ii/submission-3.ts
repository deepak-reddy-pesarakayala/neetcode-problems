class Solution {
    distributeCandies(n: number, limit: number): number {
        let ans = 0;
        for (let i = 0; i <= Math.min(n, limit); i++) {
            const remaining = n - i;
            const min = Math.max(0, remaining - limit);
            const max = Math.min(limit, remaining);
            if (min <= max) ans += max - min + 1;
        }
        return ans;
    }
}