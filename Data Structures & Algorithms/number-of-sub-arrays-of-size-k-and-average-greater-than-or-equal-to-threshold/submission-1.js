class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let res = 0,
            l = 0;
        for (let r = k - 1; r < arr.length; r++) {
            let sum = 0;
            for (let i = l; i <= r; i++) {
                sum += arr[i];
            }
            if (sum / k >= threshold) {
                res++;
            }
            l++;
        }
        return res;
    }
}