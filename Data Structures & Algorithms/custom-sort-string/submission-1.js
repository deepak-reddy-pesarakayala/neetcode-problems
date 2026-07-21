class Solution {
    /**
     * @param {string} order
     * @param {string} s
     * @return {string}
     */
    customSortString(order, s) {
        const freq = new Map();
        for (const ch of s) {
            freq.set(ch, (freq.get(ch) || 0) + 1);
        }
        let result = "";
        for (const ch of order) {
            while (freq.get(ch) > 0) {
                result += ch;
                freq.set(ch, freq.get(ch) - 1);
            }
        }
        for (const [ch, count] of freq) {
            result += ch.repeat(count);
        }
        return result;
    }
}