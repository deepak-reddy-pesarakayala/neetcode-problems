class Solution {
    findKthLargest(nums: number[], k: number): number {
        const target = nums.length - k;

        const partition = (left: number, right: number): number => {
            const randomIndex = left + Math.floor(Math.random() * (right - left + 1));
            [nums[randomIndex], nums[right]] = [nums[right], nums[randomIndex]];

            const pivot = nums[right];
            let i = left;

            for (let j = left; j < right; j++) {
                if (nums[j] <= pivot) {
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                    i++;
                }
            }

            [nums[i], nums[right]] = [nums[right], nums[i]];
            return i;
        };

        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const pivotIndex = partition(left, right);

            if (pivotIndex === target) {
                return nums[pivotIndex];
            } else if (pivotIndex < target) {
                left = pivotIndex + 1;
            } else {
                right = pivotIndex - 1;
            }
        }

        return -1;
    }
}