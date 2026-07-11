class Solution {
    /**
     * @param {character[]} chars
     * @return {number}
     */
    compress(chars) {
        const n = chars.length;
        let s = '';
        let i = 0;
        while (i < n) {
            s += chars[i];
            let j = i + 1;
            while (j < n && chars[i] === chars[j]) {
                j++;
            }
            if (j - i > 1) {
                s += String(j - i);
            }
            i = j;
        }
        for (i = 0; i < s.length; i++) {
            chars[i] = s[i];
        }
        return s.length;
    }
}