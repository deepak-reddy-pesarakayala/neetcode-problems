class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {
        const first = this.findFirst(nums, target);
        if (first === -1) return [-1, -1];
        const last = this.findLast(nums, target);
        return [first, last];
    }
    findFirst(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let ans = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                ans = mid;
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return ans;
    }
    findLast(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let ans = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                ans = mid;
                left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return ans;
    }
}