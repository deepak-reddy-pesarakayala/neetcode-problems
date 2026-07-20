class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minOperations(s) {
        let changesForZeroStart = 0;
        for (let i = 0; i < s.length; i++) {
            const expected = i % 2 === 0 ? "0" : "1";
            if (s[i] !== expected) {
                changesForZeroStart++;
            }
        }
        const changesForOneStart = s.length - changesForZeroStart;
        return Math.min(changesForZeroStart, changesForOneStart);
    }
}