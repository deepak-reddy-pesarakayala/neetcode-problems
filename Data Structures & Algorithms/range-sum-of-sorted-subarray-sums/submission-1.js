class Solution {
    rangeSum(nums, n, left, right) {
        const sums = [];

        for (let i = 0; i < n; i++) {
            let sum = 0;

            for (let j = i; j < n; j++) {
                sum += nums[j];
                sums.push(sum);
            }
        }

        sums.sort((a, b) => a - b);

        let ans = 0;
        const MOD = 1000000007;

        for (let i = left - 1; i < right; i++) {
            ans = (ans + sums[i]) % MOD;
        }

        return ans;
    }
}