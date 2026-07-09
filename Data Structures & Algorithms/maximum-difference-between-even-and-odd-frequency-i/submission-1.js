class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        const freq = new Array(26).fill(0);
        for (let ch of s) {
            freq[ch.charCodeAt(0) - 97]++;
        }
        let maxOdd = -Infinity;
        let minEven = Infinity;
        for (let count of freq) {
            if (count === 0) continue;
            if (count % 2 === 1) {
                maxOdd = Math.max(maxOdd, count);
            } else {
                minEven = Math.min(minEven, count);
            }
        }
        return maxOdd - minEven;
    }
}