/**
 * Forward declaration of guess API.
 * 
 * @param {number} num
 * @return {number}
 * guess(num)
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let left = 1;
        let right = n;

        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            const result = guess(mid);

            if (result === 0) {
                return mid;
            } else if (result === -1) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return -1;
    }
}