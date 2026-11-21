class Solution {
    minDays(n) {
        const memo = new Map();

        const dp = (n) => {
            if (n <= 1) return n;
            if (memo.has(n)) return memo.get(n);

            const ans = Math.min(
                n % 2 + 1 + dp(Math.floor(n / 2)),
                n % 3 + 1 + dp(Math.floor(n / 3))
            );

            memo.set(n, ans);
            return ans;
        };

        return dp(n);
    }
}