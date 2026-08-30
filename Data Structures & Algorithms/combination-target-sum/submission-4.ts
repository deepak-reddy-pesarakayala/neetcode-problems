class Solution {
    combinationSum(nums: number[], target: number): number[][] {
        const result: number[][] = [];
        const path: number[] = [];
        const backtrack = (index: number, remaining: number): void => {
            if (remaining === 0) {
                result.push([...path]);
                return;
            }
            for (let i = index; i < nums.length; i++) {
                if (nums[i] > remaining) {
                    continue;
                }
                path.push(nums[i]);
                backtrack(i, remaining - nums[i]);
                path.pop();
            }
        };
        backtrack(0, target);
        return result;
    }
}

