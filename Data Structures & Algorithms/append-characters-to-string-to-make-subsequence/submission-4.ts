class Solution {
    appendCharacters(s: string, t: string): number {
        let i = 0;
        for (let j = 0; j < s.length && i < t.length; j++) {
            if (s[j] === t[i]) {
                i++;
            }
        }
        return t.length - i;
    }
}