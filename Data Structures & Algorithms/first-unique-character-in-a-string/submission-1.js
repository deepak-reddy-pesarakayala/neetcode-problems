class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        const frequency = new Array(26).fill(0);
        for (const ch of s) {
            frequency[ch.charCodeAt(0) - 97]++;
        }
        for (let i = 0; i < s.length; i++) {
            if (frequency[s.charCodeAt(i) - 97] === 1) {
                return i;
            }
        }
        return -1;
    }
}