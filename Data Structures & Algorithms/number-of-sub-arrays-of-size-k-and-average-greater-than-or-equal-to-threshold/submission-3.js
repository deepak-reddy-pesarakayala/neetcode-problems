class Solution {
    numOfSubarrays(arr, k, threshold) {
        let sum = 0;
        let count = 0;
        let target = k * threshold;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            if (i >= k) {
                sum -= arr[i - k];
            }
            if (i >= k - 1 && sum >= target) {
                count++;
            }
        }
        return count;
    }
}