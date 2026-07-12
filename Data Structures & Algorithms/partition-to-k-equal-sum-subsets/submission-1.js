class Solution {
    canPartitionKSubsets(nums, k) {
        const total = nums.reduce((sum, num) => sum + num, 0);
        if (total % k !== 0) {
            return false;
        }
        const target = total / k;
        nums.sort((a, b) => b - a);
        if (nums[0] > target) {
            return false;
        }
        const used = new Array(nums.length).fill(false);
        const backtrack = (start, currentSum, groupsLeft) => {
            if (groupsLeft === 1) {
                return true;
            }
            if (currentSum === target) {
                return backtrack(0, 0, groupsLeft - 1);
            }
            let previous = -1;
            for (let i = start; i < nums.length; i++) {
                if (used[i] || nums[i] === previous) {
                    continue;
                }
                if (currentSum + nums[i] > target) {
                    continue;
                }
                used[i] = true;
                if (backtrack(i + 1, currentSum + nums[i], groupsLeft)) {
                    return true;
                }
                used[i] = false;
                previous = nums[i];
                if (currentSum === 0) {
                    break;
                }
            }
            return false;
        };
        return backtrack(0, 0, k);
    }
}