class Solution {
    splitArray(nums: number[], k: number): number {
        let left = Math.max(...nums);
        let right = nums.reduce((sum, num) => sum + num, 0);
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            let parts = 1;
            let sum = 0;
            for (const num of nums) {
                if (sum + num > mid) {
                    parts++;
                    sum = num;
                } else {
                    sum += num;
                }
            }
            if (parts <= k) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}