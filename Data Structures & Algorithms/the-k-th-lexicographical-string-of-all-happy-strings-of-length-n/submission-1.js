class Solution {
    getHappyString(n, k) {
        const result = [];
        const chars = ['a', 'b', 'c'];

        const backtrack = (s) => {
            if (s.length === n) {
                result.push(s);
                return;
            }

            for (const ch of chars) {
                if (s.length === 0 || s[s.length - 1] !== ch) {
                    backtrack(s + ch);
                }
            }
        };

        backtrack("");

        return result.length >= k ? result[k - 1] : "";
    }
}