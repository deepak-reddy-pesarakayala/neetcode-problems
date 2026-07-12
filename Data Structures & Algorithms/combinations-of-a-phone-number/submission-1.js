class Solution {
    letterCombinations(digits) {
        if (digits.length === 0) {
            return [];
        }
        const map = {
            '2': "abc",
            '3': "def",
            '4': "ghi",
            '5': "jkl",
            '6': "mno",
            '7': "pqrs",
            '8': "tuv",
            '9': "wxyz"
        };
        const result = [];
        const backtrack = (index, current) => {
            if (index === digits.length) {
                result.push(current);
                return;
            }
            const letters = map[digits[index]];
            for (const ch of letters) {
                backtrack(index + 1, current + ch);
            }
        };
        backtrack(0, "");
        return result;
    }
}