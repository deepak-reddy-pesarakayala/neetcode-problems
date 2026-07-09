class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        const mapST = new Map();
        const mapTS = new Map();
        for (let i = 0; i < s.length; i++) {
            const ch1 = s[i];
            const ch2 = t[i];
            if (mapST.has(ch1)) {
                if (mapST.get(ch1) !== ch2) {
                    return false;
                }
            } else {
                mapST.set(ch1, ch2);
            }
            if (mapTS.has(ch2)) {
                if (mapTS.get(ch2) !== ch1) {
                    return false;
                }
            } else {
                mapTS.set(ch2, ch1);
            }
        }
        return true;
    }
}