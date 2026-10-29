class Solution {
    beautifulSubsets(nums: number[], k: number): number {
        let count = 0;
        const freq = new Map<number, number>();

        const backtrack = (index: number): void => {
            if (index === nums.length) {
                count++;
                return;
            }

            backtrack(index + 1);

            const num = nums[index];

            if ((freq.get(num - k) || 0) === 0 &&
                (freq.get(num + k) || 0) === 0) {
                freq.set(num, (freq.get(num) || 0) + 1);

                backtrack(index + 1);

                const remaining = freq.get(num)! - 1;

                if (remaining === 0) {
                    freq.delete(num);
                } else {
                    freq.set(num, remaining);
                }
            }
        };

        backtrack(0);
        return count - 1;
    }
}