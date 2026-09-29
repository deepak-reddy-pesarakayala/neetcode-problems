class Solution {
    numOfSubarrays(arr: number[], k: number, threshold: number): number {
        let sum = 0;
        let count = 0;
        const target = k * threshold;
        for (let i = 0; i < k; i++) sum += arr[i];
        if (sum >= target) count++;
        for (let i = k; i < arr.length; i++) {
            sum += arr[i] - arr[i - k];
            if (sum >= target) count++;
        }
        return count;
    }
}