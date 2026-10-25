class Solution {
    subsetXORSum(nums: number[]): number {
        let result = 0;
        const n = nums.length;

        for (let mask = 0; mask < (1 << n); mask++) {
            let xor = 0;

            for (let i = 0; i < n; i++) {
                if (mask & (1 << i)) {
                    xor ^= nums[i];
                }
            }

            result += xor;
        }

        return result;
    }
}
