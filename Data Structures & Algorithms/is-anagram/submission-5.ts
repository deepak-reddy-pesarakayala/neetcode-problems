class Solution {
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }
        const count = new Array<number>(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - 97]++;
            count[t.charCodeAt(i) - 97]--;
        }
        for (let i = 0; i < 26; i++) {
            if (count[i] !== 0) {
                return false;
            }
        }
        return true;
    }
}
