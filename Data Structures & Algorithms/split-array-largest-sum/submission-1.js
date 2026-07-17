class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        let left = Math.max(...nums);
        let right = nums.reduce((sum, num) => sum + num, 0);
        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (this.canSplit(nums, k, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    } 
    canSplit(nums, k, maxSum) {
        let subarrays = 1;
        let currentSum = 0;
        for (const num of nums) {
            if (currentSum + num > maxSum) {
                subarrays++;
                currentSum = num;
                if (subarrays > k) {
                    return false;
                }
            } else {
                currentSum += num;
            }
        }
        return true;
    }
}