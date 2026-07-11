class Solution {
    /**
     * @param {number[]} g
     * @param {number[]} s
     * @return {number}
     */
    findContentChildren(g, s) {
        s.sort((a, b) => a - b);
        let res = 0;
        for (let i of g) {
            let minIdx = -1;
            for (let j = 0; j < s.length; j++) {
                if (s[j] < i) continue;
                if (minIdx === -1 || s[minIdx] > s[j]) {
                    minIdx = j;
                }
            }
            if (minIdx !== -1) {
                s[minIdx] = -1;
                res++;
            }
        }
        return res;
    }
}