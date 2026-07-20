class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxLengthBetweenEqualCharacters(s) {
        const firstIndex = new Array(26).fill(-1);
        let maxLength = -1;
        for (let i = 0; i < s.length; i++) {
            const index = s.charCodeAt(i) - 97;
            if (firstIndex[index] === -1) {
                firstIndex[index] = i;
            } else {
                maxLength = Math.max(maxLength, i - firstIndex[index] - 1);
            }
        } 
        return maxLength;
    }
}