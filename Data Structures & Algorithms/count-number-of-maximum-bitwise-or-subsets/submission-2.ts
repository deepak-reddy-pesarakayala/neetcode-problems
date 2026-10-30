class Solution {
    countMaxOrSubsets(nums: number[]): number {
        let maxOr = 0;
        let count = 0;

        for (const num of nums) {
            maxOr |= num;
        }

        const backtrack = (index: number, currentOr: number): void => {
            if (index === nums.length) {
                if (currentOr === maxOr) {
                    count++;
                }
                return;
            }

            backtrack(index + 1, currentOr);

            backtrack(index + 1, currentOr | nums[index]);
        };

        backtrack(0, 0);

        return count;
    }
}