class Solution {
    countMaxOrSubsets(nums) {
        let maxOr = 0;
        for (const num of nums) {
            maxOr |= num;
        }

        let count = 0;

        const backtrack = (index, currentOr) => {
            if (index === nums.length) {
                if (currentOr === maxOr) {
                    count++;
                }
                return;
            }

            backtrack(index + 1, currentOr | nums[index]);
            backtrack(index + 1, currentOr);
        };

        backtrack(0, 0);
        return count;
    }
}