class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {string}
     */
    removeDuplicates(s, k) {
        while (s) {
            let flag = false;
            let cur = s[0];
            let cnt = 1;
            for (let i = 1; i < s.length; i++) {
                if (cur !== s[i]) {
                    cnt = 0;
                    cur = s[i];
                }
                cnt++;
                if (cnt === k) {
                    s = s.slice(0, i - cnt + 1) + s.slice(i + 1);
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                break;
            }
        }
        return s;
    }
}