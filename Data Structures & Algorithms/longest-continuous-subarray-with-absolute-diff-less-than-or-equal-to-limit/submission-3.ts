class Solution {
    longestSubarray(nums: number[], limit: number): number {
        const minDeque: number[] = [];
        const maxDeque: number[] = [];
        let minFront = 0;
        let maxFront = 0;
        let left = 0;
        let result = 0;
        for (let right = 0; right < nums.length; right++) {
            while (minDeque.length > minFront && nums[minDeque[minDeque.length - 1]] > nums[right]) minDeque.pop();
            while (maxDeque.length > maxFront && nums[maxDeque[maxDeque.length - 1]] < nums[right]) maxDeque.pop();
            minDeque.push(right);
            maxDeque.push(right);
            while (nums[maxDeque[maxFront]] - nums[minDeque[minFront]] > limit) {
                if (minDeque[minFront] === left) minFront++;
                if (maxDeque[maxFront] === left) maxFront++;
                left++;
            }
            result = Math.max(result, right - left + 1);
        }
        return result;
    }
}