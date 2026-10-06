class Solution {
    minimizeMax(nums: number[], p: number): number {
        if (p === 0) return 0;
        nums.sort((a, b) => a - b);
        let left = 0;
        let right = nums[nums.length - 1] - nums[0];
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            let pairs = 0;
            for (let i = 1; i < nums.length; i++) {
                if (nums[i] - nums[i - 1] <= mid) {
                    pairs++;
                    i++;
                }
            }
            if (pairs >= p) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}