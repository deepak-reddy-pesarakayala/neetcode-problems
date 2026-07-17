class Solution {
    /**
     * @param {number[]} nums
     * @param {number} p
     * @return {number}
     */
    minimizeMax(nums, p) {
        if (p === 0) return 0;
        nums.sort((a, b) => a - b);
        let left = 0;
        let right = nums[nums.length - 1] - nums[0];
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (this.canFormPairs(nums, p, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
    canFormPairs(nums, p, maxDiff) {
        let pairs = 0;
        for (let i = 1; i < nums.length && pairs < p; ) {
            if (nums[i] - nums[i - 1] <= maxDiff) {
                pairs++;
                i += 2;
            } else {
                i++;
            }
        }
        return pairs >= p;
    }
}