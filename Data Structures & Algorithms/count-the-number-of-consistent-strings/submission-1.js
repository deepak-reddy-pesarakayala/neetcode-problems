class Solution {
    /**
     * @param {string} allowed
     * @param {string[]} words
     * @return {number}
     */
    countConsistentStrings(allowed, words) {
        const allowedSet = new Set(allowed);
        let count = 0;
        for (const word of words) {
            let isConsistent = true;
            for (const ch of word) {
                if (!allowedSet.has(ch)) {
                    isConsistent = false;
                    break;
                }
            }
            if (isConsistent) {
                count++;
            }
        }
        return count;
    }
}