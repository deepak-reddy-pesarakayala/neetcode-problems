class Solution {
    canPartitionKSubsets(nums: number[], k: number): boolean {
        const sum = nums.reduce((a, b) => a + b, 0);

        if (sum % k !== 0) {
            return false;
        }

        const target = sum / k;
        nums.sort((a, b) => b - a);

        if (nums[0] > target) {
            return false;
        }

        const used: boolean[] = new Array(nums.length).fill(false);

        const backtrack = (start: number, currentSum: number, count: number): boolean => {
            if (count === k - 1) {
                return true;
            }

            if (currentSum === target) {
                return backtrack(0, 0, count + 1);
            }

            for (let i = start; i < nums.length; i++) {
                if (used[i] || currentSum + nums[i] > target) {
                    continue;
                }

                used[i] = true;

                if (backtrack(i + 1, currentSum + nums[i], count)) {
                    return true;
                }

                used[i] = false;

                if (currentSum === 0) {
                    return false;
                }

                while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
                    i++;
                }
            }

            return false;
        };

        return backtrack(0, 0, 0);
    }
}