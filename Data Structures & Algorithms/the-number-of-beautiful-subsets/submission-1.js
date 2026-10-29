class Solution {
    beautifulSubsets(nums, k) {
        let count = 0;
        const freq = new Map();

        const backtrack = (index) => {
            if (index === nums.length) {
                count++;
                return;
            }

            backtrack(index + 1);

            if (!freq.has(nums[index] - k) && !freq.has(nums[index] + k)) {
                freq.set(nums[index], (freq.get(nums[index]) || 0) + 1);
                backtrack(index + 1);
                freq.set(nums[index], freq.get(nums[index]) - 1);
                if (freq.get(nums[index]) === 0) {
                    freq.delete(nums[index]);
                }
            }
        };

        backtrack(0);
        return count - 1;
    }
}