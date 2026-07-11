class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        const reverse = (l, r) => {
            if (l < r) {
                reverse(l + 1, r - 1);
                [s[l], s[r]] = [s[r], s[l]];
            }
        };
        reverse(0, s.length - 1);
    }
}