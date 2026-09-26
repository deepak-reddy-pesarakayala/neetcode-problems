class Solution {
    sortArray(nums: number[]): number[] {
        this.mergeSort(nums, 0, nums.length - 1);
        return nums;
    }
    mergeSort(nums: number[], left: number, right: number): void {
        if (left >= right) return;
        const mid = Math.floor((left + right) / 2);
        this.mergeSort(nums, left, mid);
        this.mergeSort(nums, mid + 1, right);
        this.merge(nums, left, mid, right);
    }
    merge(nums: number[], left: number, mid: number, right: number): void {
        let i = left;
        let j = mid + 1;
        const temp: number[] = [];
        while (i <= mid && j <= right) {
            if (nums[i] <= nums[j]) {
                temp.push(nums[i++]);
            } else {
                temp.push(nums[j++]);
            }
        }
        while (i <= mid) temp.push(nums[i++]);
        while (j <= right) temp.push(nums[j++]);
        for (let k = 0; k < temp.length; k++) {
            nums[left + k] = temp[k];
        }
    }
}