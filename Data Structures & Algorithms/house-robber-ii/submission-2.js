class Solution {
    rob(nums) {
        const n = nums.length;

        if (n === 1) {
            return nums[0];
        }

        const helper = (start, end) => {
            let prev1 = 0;
            let prev2 = 0;

            for (let i = start; i <= end; i++) {
                let current = Math.max(prev1, prev2 + nums[i]);
                prev2 = prev1;
                prev1 = current;
            }

            return prev1;
        };

        return Math.max(helper(0, n - 2), helper(1, n - 1));
    }
}