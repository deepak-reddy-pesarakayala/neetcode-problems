class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let i = 0;
        const helper = () => {
            let res = '';
            let k = 0;
            while (i < s.length) {
                const c = s[i];
                if (!isNaN(c)) {
                    k = k * 10 + parseInt(c, 10);
                } else if (c === '[') {
                    i++;
                    res += helper().repeat(k);
                    k = 0;
                } else if (c === ']') {
                    return res;
                } else {
                    res += c;
                }
                i++;
            }
            return res;
        };
        return helper();
    }
}