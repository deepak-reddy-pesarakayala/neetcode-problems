class Solution {
    maxSlidingWindow(nums: number[], k: number): number[] {
        const deque: number[] = [];
        const result: number[] = [];
        let front = 0;
        for (let i = 0; i < nums.length; i++) {
            while (front < deque.length && deque[front] <= i - k) front++;
            while (deque.length > front && nums[deque[deque.length - 1]] <= nums[i]) {
                deque.pop();
            }
            deque.push(i);
            if (i >= k - 1) result.push(nums[deque[front]]);
        }
        return result;
    }
}