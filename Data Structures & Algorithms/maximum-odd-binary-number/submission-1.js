class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    maximumOddBinaryNumber(s) {
        let ones = 0;
        let zeros = 0;
        for (const char of s) {
            if (char === '1') ones++;
            else zeros++;
        }
        return '1'.repeat(ones - 1) + '0'.repeat(zeros) + '1';
    }
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Solution;
}