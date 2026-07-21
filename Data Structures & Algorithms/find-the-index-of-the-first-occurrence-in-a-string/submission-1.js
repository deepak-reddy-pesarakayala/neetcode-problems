class Solution {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    strStr(haystack, needle) {
        const m = needle.length;
        const n = haystack.length;
        const lps = Array(m).fill(0);
        let len = 0;
        for (let i = 1; i < m; ) {
            if (needle[i] === needle[len]) {
                lps[i++] = ++len;
            } else if (len > 0) {
                len = lps[len - 1];
            } else {
                lps[i++] = 0;
            }
        }
        let i = 0; 
        let j = 0; 
        while (i < n) {
            if (haystack[i] === needle[j]) {
                i++;
                j++; 
                if (j === m) {
                    return i - m;
                }
            } else if (j > 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
        return -1;
    }
}