class Solution {
    mySqrt(x: number): number {
        if (x < 2) return x;
        let left = 1;
        let right = x;
        let result = 0;
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            if (mid <= Math.floor(x / mid)) {
                result = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }
}