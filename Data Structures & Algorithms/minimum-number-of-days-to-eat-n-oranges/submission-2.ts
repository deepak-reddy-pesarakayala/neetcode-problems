class Solution {
    minDays(n: number): number {
        const memo = new Map<number, number>();

        const dp = (num: number): number => {
            if (num <= 1) return num;

            if (memo.has(num)) return memo.get(num)!;

            const by2 = num % 2 + 1 + dp(Math.floor(num / 2));
            const by3 = num % 3 + 1 + dp(Math.floor(num / 3));

            const result = Math.min(by2, by3);
            memo.set(num, result);

            return result;
        };

        return dp(n);
    }
}