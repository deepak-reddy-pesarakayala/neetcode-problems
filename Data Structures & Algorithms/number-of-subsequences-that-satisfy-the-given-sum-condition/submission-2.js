class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    numSubseq(nums, target) {
        const MOD = 1000000007;
        nums.sort((a, b) => a - b);
        const n = nums.length;
        const pow = new Array(n);
        pow[0] = 1;
        for (let i = 1; i < n; i++) {
            pow[i] = (pow[i - 1] * 2) % MOD;
        }
        let left = 0;
        let right = n - 1;
        let ans = 0;
        while (left <= right) {
            if (nums[left] + nums[right] <= target) {
                ans = (ans + pow[right - left]) % MOD;
                left++;
            } else {
                right--;
            }
        }
        return ans;
    }
}