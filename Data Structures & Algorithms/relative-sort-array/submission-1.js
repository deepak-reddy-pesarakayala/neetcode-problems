class Solution {
    relativeSortArray(arr1, arr2) {
        const count = new Array(1001).fill(0);
        for (const num of arr1) {
            count[num]++;
        }
        const result = [];
        for (const num of arr2) {
            while (count[num] > 0) {
                result.push(num);
                count[num]--;
            }
        }
        for (let num = 0; num <= 1000; num++) {
            while (count[num] > 0) {
                result.push(num);
                count[num]--;
            }
        }
        return result;
    }
}