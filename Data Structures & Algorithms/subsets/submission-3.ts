class Solution {
    subsets(nums: number[]): number[][] {
        const result: number[][] = [];
        const current: number[] = [];

        const backtrack = (start: number): void => {
            result.push([...current]);

            for (let i = start; i < nums.length; i++) {
                current.push(nums[i]);
                backtrack(i + 1);
                current.pop();
            }
        };

        backtrack(0);
        return result;
    }
}