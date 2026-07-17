class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if (x < 2) return x;
        let left = 1;
        let right = x;
        let ans = 0;
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            const square = mid * mid;
            if (square === x) {
                return mid;
            } else if (square < x) {
                ans = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return ans;
    }
}