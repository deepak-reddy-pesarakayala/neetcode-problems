class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDepth(s) {
        let currentDepth = 0;
        let maxDepth = 0;
        for (const char of s) {
            if (char === '(') {
                currentDepth++;
                maxDepth = Math.max(maxDepth, currentDepth);
            } else if (char === ')') {
                currentDepth--;
            }
        }
        return maxDepth;
    }
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Solution;
}