class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        const freq = new Map();
        for (const str of arr) {
            freq.set(str, (freq.get(str) || 0) + 1);
        }
        for (const str of arr) {
            if (freq.get(str) === 1) {
                k--;
                if (k === 0) {
                    return str;
                }
            }
        }
        return "";
    }
}