class Solution {
    sortArray(nums) {
        const temp = new Array(nums.length);
        const mergeSort = (left, right) => {
            if (left >= right) return;
            const mid = Math.floor((left + right) / 2);
            mergeSort(left, mid);
            mergeSort(mid + 1, right);
            let i = left;
            let j = mid + 1;
            let k = left;
            while (i <= mid && j <= right) {
                if (nums[i] <= nums[j]) {
                    temp[k++] = nums[i++];
                } else {
                    temp[k++] = nums[j++];
                }
            }
            while (i <= mid) {
                temp[k++] = nums[i++];
            }
            while (j <= right) {
                temp[k++] = nums[j++];
            }
            for (let p = left; p <= right; p++) {
                nums[p] = temp[p];
            }
        };
        mergeSort(0, nums.length - 1);
        return nums;
    }
}