class Solution {
    rangeSum(nums: number[], n: number, left: number, right: number): number {
        const sums: number[] = [];

        for (let i = 0; i < n; i++) {
            let sum = 0;

            for (let j = i; j < n; j++) {
                sum += nums[j];
                sums.push(sum);
            }
        }

        sums.sort((a, b) => a - b);

        const MOD = 1000000007;
        let result = 0;

        for (let i = left - 1; i < right; i++) {
            result = (result + sums[i]) % MOD;
        }

        return result;
    }
}