class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s) {
        let rightOnes = 0;

        for (const ch of s) {
            if (ch === "1") {
                rightOnes++;
            }
        }
        let leftZeros = 0;
        let maxScore = 0;
        for (let i = 0; i < s.length - 1; i++) {
            if (s[i] === "0") {
                leftZeros++;
            } else {
                rightOnes--;
            }

            maxScore = Math.max(maxScore, leftZeros + rightOnes);
        }
        return maxScore;
    }
}