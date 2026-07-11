class Solution {
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }
        const count1 = new Array(26).fill(0);
        const count2 = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            count1[s1.charCodeAt(i) - 97]++;
            count2[s2.charCodeAt(i) - 97]++;
        }
        if (this.same(count1, count2)) {
            return true;
        }

        for (let i = s1.length; i < s2.length; i++) {
            count2[s2.charCodeAt(i) - 97]++;
            count2[s2.charCodeAt(i - s1.length) - 97]--;

            if (this.same(count1, count2)) {
                return true;
            }
        }

        return false;
    }

    same(a, b) {
        for (let i = 0; i < 26; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
}
    