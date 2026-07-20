class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        const frequency = new Map();
        for (const ch of s) {
            frequency.set(ch, (frequency.get(ch) || 0) + 1);
        }
        let length = 0;
        let hasOddFrequency = false;
        for (const count of frequency.values()) {
            length += Math.floor(count / 2) * 2;
            if (count % 2 === 1) {
                hasOddFrequency = true;
            }
        }
        return hasOddFrequency ? length + 1 : length;
    }
}